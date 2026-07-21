// Guarded service worker registration. Only registers in real production
// origins — never in Lovable preview, dev, iframe previews, or when
// ?sw=off is present. Always unregisters matching stale workers in
// refused contexts so preview reloads stay clean.

const SW_URL = "/sw.js";

function isRefusedHost(hostname: string): boolean {
  if (hostname.startsWith("id-preview--")) return true;
  if (hostname.startsWith("preview--")) return true;
  if (hostname === "lovableproject.com" || hostname.endsWith(".lovableproject.com")) return true;
  if (hostname === "lovableproject-dev.com" || hostname.endsWith(".lovableproject-dev.com")) return true;
  if (hostname === "beta.lovable.dev" || hostname.endsWith(".beta.lovable.dev")) return true;
  return false;
}

async function unregisterMatching() {
  if (!("serviceWorker" in navigator)) return;
  try {
    const regs = await navigator.serviceWorker.getRegistrations();
    await Promise.all(
      regs.map(async (r) => {
        const scriptUrl = r.active?.scriptURL || r.installing?.scriptURL || r.waiting?.scriptURL || "";
        if (scriptUrl.endsWith(SW_URL)) {
          await r.unregister();
        }
      }),
    );
  } catch {
    // no-op
  }
}

export function registerServiceWorker() {
  if (typeof window === "undefined") return;
  if (!("serviceWorker" in navigator)) return;

  const url = new URL(window.location.href);
  const inIframe = window.self !== window.top;
  const isProd = import.meta.env.PROD;
  const refused =
    !isProd ||
    inIframe ||
    isRefusedHost(window.location.hostname) ||
    url.searchParams.get("sw") === "off";

  if (refused) {
    void unregisterMatching();
    return;
  }

  window.addEventListener("load", () => {
    navigator.serviceWorker.register(SW_URL, { scope: "/" }).catch(() => {
      // ignore
    });
  });
}