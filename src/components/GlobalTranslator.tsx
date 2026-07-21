import { useEffect } from 'react';
import { useI18n } from '../lib/I18nContext';
import { translateText } from '../lib/manualTranslations';
import { Language } from '../lib/languageConfig';

const IGNORED_TAGS = new Set(['SCRIPT', 'STYLE', 'NOSCRIPT', 'TEXTAREA']);
const TRANSLATABLE_ATTRS = ['placeholder', 'title', 'aria-label', 'alt'];

function shouldSkipText(node: Text) {
  const parent = node.parentElement;
  if (!parent || IGNORED_TAGS.has(parent.tagName)) return true;
  return parent.closest('[data-no-global-translate]') !== null;
}

function translateTree(root: ParentNode, language: Language) {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  const textNodes: Text[] = [];

  while (walker.nextNode()) {
    const node = walker.currentNode as Text;
    if (!shouldSkipText(node)) textNodes.push(node);
  }

  for (const node of textNodes) {
    const translated = translateText(node.nodeValue || '', language);
    if (translated !== node.nodeValue) {
      node.nodeValue = translated;
    }
  }

  const elements =
    root instanceof Element
      ? [root, ...Array.from(root.querySelectorAll('*'))]
      : Array.from(root.querySelectorAll('*'));

  for (const element of elements) {
    if (element.closest('[data-no-global-translate]')) continue;

    for (const attr of TRANSLATABLE_ATTRS) {
      const value = element.getAttribute(attr);
      if (!value) continue;

      const translated = translateText(value, language);
      if (translated !== value) {
        element.setAttribute(attr, translated);
      }
    }
  }
}

export default function GlobalTranslator() {
  const { language } = useI18n();

  useEffect(() => {
    translateTree(document.body, language);

    let scheduled = false;
    const observer = new MutationObserver((mutations) => {
      if (scheduled) return;
      scheduled = true;

      window.requestAnimationFrame(() => {
        scheduled = false;

        for (const mutation of mutations) {
          if (mutation.type === 'childList') {
            mutation.addedNodes.forEach((node) => {
              if (node.nodeType === Node.ELEMENT_NODE) {
                translateTree(node as Element, language);
              } else if (node.nodeType === Node.TEXT_NODE && !shouldSkipText(node as Text)) {
                const textNode = node as Text;
                const translated = translateText(textNode.nodeValue || '', language);
                if (translated !== textNode.nodeValue) textNode.nodeValue = translated;
              }
            });
          }

          if (mutation.type === 'characterData') {
            const node = mutation.target as Text;
            if (!shouldSkipText(node)) {
              const translated = translateText(node.nodeValue || '', language);
              if (translated !== node.nodeValue) node.nodeValue = translated;
            }
          }

          if (mutation.type === 'attributes' && mutation.target instanceof Element) {
            translateTree(mutation.target, language);
          }
        }
      });
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
      characterData: true,
      attributes: true,
      attributeFilter: TRANSLATABLE_ATTRS,
    });

    return () => observer.disconnect();
  }, [language]);

  return null;
}
