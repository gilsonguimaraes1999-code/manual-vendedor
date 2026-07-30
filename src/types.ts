export interface CommandInfo {
  key: string;
  name: string;
  description: string;
  when: string;
  example: string;
  note: string;
  category?: 'controles' | 'poderes' | 'geral';
  video?: string;
}

export const CONTROLS: CommandInfo[] = [
  { key: 'WASD', name: 'Movimentação', description: 'Movimentar o personagem', when: 'Navegação básica', example: 'Andar pela cidade', note: 'Base de movimentação', category: 'controles' },
  { key: 'Espaço', name: 'Pular', description: 'Pular obstáculos', when: 'Ultrapassar objetos', example: 'Subir em algo', note: 'Movimento vertical', category: 'controles' },
  { key: 'K', name: 'Telefone', description: 'Abrir celular', when: 'Apps e chamadas', example: 'Chamar mecânico', note: 'Comunicação rádio/celular', category: 'controles' },
  { key: '"', name: 'Mochila', description: 'Abrir inventário', when: 'Ver itens', example: 'Equipar peça', note: 'Gerenciamento de recursos', category: 'controles' },
  { key: 'L', name: 'Trancar', description: 'Trancar/destrancar veículo', when: 'Segurança', example: 'Sair e trancar carro', note: 'Sempre trancar ao sair', category: 'controles' },
  { key: 'Y', name: 'Aceitar', description: 'Aceitar ação/comando', when: 'Interação', example: 'Confirmar serviço', note: 'Confirmação rápida', category: 'controles' },
  { key: 'U', name: 'Recusar', description: 'Recusar ação/comando', when: 'Interação', example: 'Negar proposta', note: 'Cancelamento rápido', category: 'controles' },
  { key: 'F1', name: 'Painel', description: 'Abrir painel principal', when: 'Sistemas e stats', example: 'Ver vendas', note: 'Menu de sistemas SantaGroup', category: 'controles' },
  { key: 'F6', name: 'Cancelar', description: 'Cancelar animação', when: 'Bugs visuais', example: 'Sair de pose', note: 'Reset de estado', category: 'controles' },
  { key: 'F8', name: 'Console', description: 'Abrir console de comandos', when: 'Digitar comandos', example: 'nc / tuning', note: 'Uso administrativo', category: 'controles' },
  { key: 'T', name: 'Chat', description: 'Abrir chat global/local', when: 'Falar por texto', example: 'Pedir ajuda rádio', note: 'Comunicação escrita', category: 'controles' },
  { key: 'P', name: 'Configurações', description: 'Menu de configurações do jogo', when: 'Ajustes', example: 'Mudar VOIP', note: 'Config do FiveM', category: 'controles' },
  { key: 'N', name: 'Falar', description: 'Pressionar para falar (VOIP)', when: 'Comunicação voz', example: 'Falar com cliente', note: 'Use "Apertar para Falar"', category: 'controles' },
  { key: 'ESC', name: 'Menu', description: 'Menu principal', when: 'Navegação geral', example: 'Sair ou Mapas', note: 'Painel padrão', category: 'controles' },
  { key: '1-5', name: 'Atalhos', description: 'Selecionar armas ou ferramentas', when: 'Acesso rápido', example: 'Sacar item', note: 'Slots rápidos do inventário', category: 'controles' },
  { key: 'PgUp', name: 'Porta-malas', description: 'Abrir porta-malas do veículo', when: 'Interação veículo', example: 'Guardar loot', note: 'Gestão de carga', category: 'controles' },
  { key: 'ALT', name: 'Interação', description: 'Interação de contexto', when: 'Falar com NPCs/Players', example: 'Ver menus dinâmicos', note: 'Tecla de contato principal', category: 'controles' },
  { 
    key: 'Setas', 
    name: 'Animações', 
    description: 'Executar animações rápidas', 
    when: 'Expressão corporal', 
    example: 'Setas: ↑ Continência | ↓ Assoviar | ← Joia | → Desapontado', 
    note: 'Navegue pelas setas para emotes instantâneos', 
    category: 'controles' 
  },
];

export const STAFF_COMMANDS: CommandInfo[] = [
  { key: 'god id', name: 'Reviver', description: 'Revive o jogador pelo ID', when: 'Suporte emergencial', example: 'god 1', note: 'Restaura vida e fome', category: 'poderes', video: 'https://drive.google.com/file/d/1LI1utJT-caG29wZagPHj7NKMYqQ9DYz7/preview' },
  { key: 'god id p/dp/pn/hp', name: 'Tele-Revive', description: 'Revive e envia para local', when: 'Suporte', example: 'god 1 hp', note: 'Locais: Pier/DP/PN/HP', category: 'poderes' },
  { key: 'nc', name: 'NoClip', description: 'Ficar invisível e voar', when: 'Buscar ou supervisionar alguém', example: 'nc', note: 'Atravessa qualquer superfície', category: 'poderes', video: 'https://drive.google.com/file/d/1m46LA8EbYwI9-OG_P9xOoB9GbLgObqIv/preview' },
  { key: 'tpto id', name: 'Ir até', description: 'Teleporta até o jogador', when: 'Ir até alguém que lhe chamou ou que precisa prestar um serviço', example: 'tpto 1', note: 'Locomoção instantânea', category: 'poderes', video: 'https://drive.google.com/file/d/12AhPmBjemboGsVxr-P9mxLL9UqQLIzg4/preview' },
  { key: 'tptome id', name: 'Trazer', description: 'Puxar jogador até você', when: 'Prestar ajuda a alguém ou puxar o cliente para prestar um serviço à ele', example: 'tptome 1', note: 'Puxa o player', category: 'poderes', video: 'https://drive.google.com/file/d/1Mf49V-SDuY30w3y_8W6aCcEiqde14zib/preview' },
  { key: 'tpway', name: 'Waypoint', description: 'Vai até o marcador do mapa', when: 'Locomoção', example: 'tpway', note: 'Teleporte por GPS', category: 'poderes' },
  { key: 'adv id', name: 'Advertência', description: 'Envia para a ilha (punição)', when: 'Aplica uma punição à um jogador (não pode utilizar de forma errada)', example: 'adv 1', note: 'Prisão administrativa', category: 'poderes' },
  { key: 'dvarea 10', name: 'Limpar Área', description: 'Remove veículos num raio de 10m', when: 'Limpeza', example: 'dvarea 10', note: 'Evita lag por carros', category: 'poderes' },
  { key: 'ugroups', name: 'Permissões', description: 'Verifica grupos do player', when: 'Verificação de quais vips a pessoa tem ou cargos em facção/organização', example: 'ugroups 1', note: 'Checa poder de admin', category: 'poderes' },
  { key: 'ban id', name: 'Banir', description: 'Bane o jogador', when: 'Aplicar uma punição à um jogador (permitido apenas o uso do ban comercial em casos comerciais, não utiliza-lo de forma errada)', example: 'ban 1', note: 'Remove acesso permanente', category: 'poderes' },
  { key: 'kick id', name: 'Expulsar', description: 'Kicka o jogador', when: 'Retira o jogador da cidade', example: 'kick 1', note: 'Desconexão forçada', category: 'poderes' },
  { key: 'cleanarea', name: 'Resetar Ambiente', description: 'Limpa marcas e objetos', when: 'Faz com que objetos ao redor sumam', example: 'cleanarea', note: 'Restaura a cena', category: 'poderes' },
  { key: 'mundo', name: 'Mundo', description: 'Acessar diferentes mundos/instâncias', when: 'Mudar para instâncias privadas (Guerra, Evento, etc)', example: 'mundo Afiliado', note: 'Ex: guerra, evento, afiliado, primária...', category: 'poderes', video: 'https://drive.google.com/file/d/1lnolUXBkmAcs_zaJ2tNw4ZTX8pVz9oHL/preview' },
  { key: 'mundoarea', name: 'Instância', description: 'Criar mundo separado', when: 'Levar jogador à um mundo privado sem intervenções do mundo padrão', example: 'mundoarea 5', note: 'Isola os players', category: 'poderes', video: 'https://drive.google.com/file/d/1Kz4yx_wy9VHzFfVsJa3vnuDbKTT-kCnn/preview' },
  { key: 'car [spawn]', name: 'Spawn Carro', description: 'Spawna um veículo', when: 'Puxar veículos para um cliente testar', example: 'car panto', note: 'Spawna um veículo no local que executou o comando.', category: 'poderes', video: 'https://drive.google.com/file/d/1nB2hco0wsYs4iG2iM4BVprta-0mxmnHl/preview' },
  { key: 'fix', name: 'Fix', description: 'Consertar o veículo quebrado', when: 'Veículo com motor ou lataria danificada', example: 'fix', note: 'Restaura a integridade do carro', category: 'poderes' },
  { key: 'dv', name: 'Guardar Veículo', description: 'Guardar veículos spawnados.', when: 'Guarda veículos após spawnar para teste', example: 'dv', note: 'Remove o veículo à frente', category: 'poderes', video: 'https://drive.google.com/file/d/1RASirrPn_xN7ZY6O1Hb_Yqafwiv67W9E/preview' },
  { key: 'tuning', name: 'Full Tuning', description: 'Tuna o carro no máximo', when: 'Aumenta todo o desempenho do veículo', example: 'tuning', note: 'Performance máxima', category: 'poderes', video: 'https://drive.google.com/file/d/1441VAsH6up4Tr7QZL2NvIAvkpuCeBlQw/preview' },
  { key: 'vehedit', name: 'Editar Veículo', description: 'Abre menu de mecânica', when: 'Tuna o veículo de forma manual (gasta dinheiro do jogo)', example: 'vehedit', note: 'Customização profunda', category: 'poderes', video: 'https://drive.google.com/file/d/1rLPVSuZLXkXPU0boUYeQVgTF2D-wKVWn/preview' },
  { key: 'wall', name: 'Wall', description: 'Ver informações dos players por cima da cabeça', when: 'Administração e suporte', example: 'wall', note: 'Exibe ID, Vida e Colete', category: 'poderes', video: 'https://drive.google.com/file/d/1ip866m_AFXcO1QN52irQXkxHdCUJJw9r/preview' },
  { key: 'wallconfig2', name: 'Wall Config', description: 'Configurar informações do Wall', when: 'Ajuste de visão administrativa', example: 'wallconfig2', note: 'Termos: Source (ID temporário) | Passaporte (ID permanente)', category: 'poderes', video: 'https://drive.google.com/file/d/1m5ibARmoZBUo7YPgUo68GBX3GEEzvyHu/preview' },
];
