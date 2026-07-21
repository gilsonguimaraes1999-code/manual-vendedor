// Mapa de descrições acessíveis por emoji.
// Sempre que um emoji não tiver descrição própria aqui, o componente cai
// para aria-hidden — evita que leitores de tela leiam "cara sorridente"
// quando o texto ao lado já transmite o sentido.
export const EMOJI_LABELS: Record<string, string> = {
  '✨': 'destaque',
  '👁️': 'visualizar',
  '🖼️': 'imagem',
  '🔗': 'link',
  '📋': 'copiar',
  '✅': 'concluído',
  '❌': 'erro',
  '⚠️': 'atenção',
  '💎': 'destaque',
  '⭐': 'estrela',
  '🔥': 'em alta',
  '⚡': 'rápido',
  '📌': 'fixado',
  '📍': 'localização',
  '➡️': 'próximo',
  '👉': 'ver ao lado',
  '🟢': 'positivo',
  '🟡': 'atenção',
  '🔴': 'negativo',
  '💰': 'valor',
  '💵': 'dinheiro',
  '💸': 'pagamento',
  '🪙': 'moeda',
  '💳': 'cartão',
  '🏦': 'banco',
  '📈': 'crescimento',
  '📉': 'queda',
  '📊': 'estatística',
  '🧾': 'recibo',
  '🤝': 'acordo',
  '🧮': 'cálculo',
  '💼': 'negócio',
  '🏷️': 'preço',
  '🛒': 'compra',
  '🎯': 'meta',
  '🏆': 'conquista',
  '🥇': 'primeiro lugar',
  '🛡️': 'proteção',
  '🪪': 'identificação',
  '🏠': 'propriedade',
  '🏢': 'empresa',
  '🏙️': 'cidade',
  '🚗': 'veículo',
  '🚙': 'veículo utilitário',
  '🏍️': 'motocicleta',
  '✈️': 'avião',
  '🚁': 'helicóptero',
  '👑': 'liderança',
  '🔑': 'chave',
  '🔒': 'bloqueado',
  '🔓': 'desbloqueado',
  '⏰': 'tempo',
  '⏳': 'em andamento',
  '📅': 'data',
  '🎉': 'comemoração',
  '🔔': 'notificação',
  '🧠': 'estratégia',
  '💬': 'mensagem',
  '🙌': 'sucesso',
  '💪': 'força',
  '🫡': 'compromisso',
};

interface EmojiProps {
  symbol: string;
  /** Descrição customizada. Se omitida, usa EMOJI_LABELS ou vira decorativo. */
  label?: string;
  /** Força tratamento decorativo (aria-hidden) mesmo com label disponível. */
  decorative?: boolean;
  className?: string;
}

export function Emoji({ symbol, label, decorative, className }: EmojiProps) {
  const resolved = label ?? EMOJI_LABELS[symbol];
  if (decorative || !resolved) {
    return (
      <span aria-hidden="true" className={className}>
        {symbol}
      </span>
    );
  }
  return (
    <span role="img" aria-label={resolved} className={className}>
      {symbol}
    </span>
  );
}
