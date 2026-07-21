import { Language } from './languageConfig';

type PhraseRecord = Record<Language, string> & {
  aliases?: string[];
};

const phraseRecords: PhraseRecord[] = [
  { pt: 'Idioma', en: 'Language', es: 'Idioma' },
  { pt: 'Português', en: 'Portuguese', es: 'Portugués' },
  { pt: 'Inglês', en: 'English', es: 'Inglés' },
  { pt: 'Espanhol', en: 'Spanish', es: 'Español' },

  { pt: 'Manual do Vendedor', en: 'Seller Manual', es: 'Manual del Vendedor' },
  { pt: 'Manual', en: 'Manual', es: 'Manual' },
  { pt: 'Manual Comercial', en: 'Commercial Manual', es: 'Manual Comercial' },
  {
    pt: 'Bem-vindo ao Comercial SantaGroup. Este manual foi criado para ensinar como jogar o roleplay e como utilizar seus poderes de forma correta.',
    en: 'Welcome to SantaGroup Commercial. This manual was created to teach you how to play roleplay and how to use your powers correctly.',
    es: 'Bienvenido al Comercial SantaGroup. Este manual fue creado para enseñar cómo jugar roleplay y cómo usar tus poderes correctamente.',
  },
  { pt: 'Evolução', en: 'Evolution', es: 'Evolución' },
  {
    pt: 'Comece com pequenos trabalhos, conheça pessoas e consequentemente traga resultados.',
    en: 'Start with small tasks, meet people and naturally bring results.',
    es: 'Empieza con pequeños trabajos, conoce personas y naturalmente trae resultados.',
  },
  { pt: 'Acesso Restrito', en: 'Restricted Access', es: 'Acceso Restringido' },
  { pt: 'Acessar Portal', en: 'Access Portal', es: 'Acceder al Portal', aliases: ['Acessar portal'] },
  {
    pt: 'Acesso exclusivo para membros autorizados.',
    en: 'Exclusive access for authorized members.',
    es: 'Acceso exclusivo para miembros autorizados.',
  },
  { pt: 'Lembrar acesso', en: 'Remember access', es: 'Recordar acceso' },
  { pt: 'Voltar para usuario', en: 'Back to user', es: 'Volver al usuario' },
  { pt: 'Informe o usuario de acesso.', en: 'Enter the access user.', es: 'Informe el usuario de acceso.' },
  { pt: 'Continuar', en: 'Continue', es: 'Continuar' },
  { pt: 'Entrar', en: 'Sign in', es: 'Entrar' },
  { pt: 'Ocultar senha', en: 'Hide password', es: 'Ocultar contraseña' },
  { pt: 'Mostrar senha', en: 'Show password', es: 'Mostrar contraseña' },
  { pt: 'Validando Identidade comercial...', en: 'Validating commercial identity...', es: 'Validando identidad comercial...' },
  { pt: 'Sincronizando Banco de Dados...', en: 'Syncing Database...', es: 'Sincronizando Base de Datos...' },
  { pt: 'Em breve...', en: 'Coming soon...', es: 'Próximamente...' },

  { pt: 'INÍCIO DE RP', en: 'RP START', es: 'INICIO DE RP' },
  { pt: 'COMERCIAL', en: 'COMMERCIAL', es: 'COMERCIAL' },
  { pt: 'AFILIADOS', en: 'AFFILIATES', es: 'AFILIADOS' },
  { pt: 'Equipe de Afiliados', en: 'Affiliate Team', es: 'Equipo de Afiliados' },
  { pt: 'CONFIGURAÇÕES', en: 'SETTINGS', es: 'AJUSTES' },
  { pt: 'Início', en: 'Home', es: 'Inicio' },
  { pt: 'Primeiros Passos', en: 'First Steps', es: 'Primeros Pasos' },
  { pt: 'Sistema da Cidade', en: 'City System', es: 'Sistema de la Ciudad' },
  { pt: 'Sistema de Farms', en: 'Farm System', es: 'Sistema de Farmeos' },
  { pt: 'Regras da Cidade', en: 'City Rules', es: 'Reglas de la Ciudad' },
  { pt: 'Controles Básicos', en: 'Basic Controls', es: 'Controles Básicos' },
  { pt: 'Comercial / Operação', en: 'Commercial / Operations', es: 'Comercial / Operación' },
  { pt: 'Sistemas Principais', en: 'Main Systems', es: 'Sistemas Principales' },
  { pt: 'Poderes (Admin)', en: 'Powers (Admin)', es: 'Poderes (Admin)' },
  { pt: 'Comandos Frequentes', en: 'Frequent Commands', es: 'Comandos Frecuentes' },
  { pt: 'Pode e Não Pode', en: 'Allowed and Not Allowed', es: 'Permitido y No Permitido' },
  { pt: 'Dicas Rápidas', en: 'Quick Tips', es: 'Consejos Rápidos' },
  { pt: 'Binds Essenciais', en: 'Essential Binds', es: 'Binds Esenciales' },
  { pt: 'Benefícios de Afiliados', en: 'Affiliate Benefits', es: 'Beneficios de Afiliados' },
  { pt: 'Status do Manual', en: 'Manual Status', es: 'Estado del Manual' },
  {
    pt: 'Manual do novo vendedor. Focado em treinamento e integração oficial.',
    en: 'New seller manual. Focused on training and official onboarding.',
    es: 'Manual del nuevo vendedor. Enfocado en entrenamiento e integración oficial.',
  },
  { pt: 'Contas', en: 'Accounts', es: 'Cuentas' },
  { pt: 'Usuário', en: 'User', es: 'Usuario' },
  { pt: 'Sair', en: 'Sign Out', es: 'Salir' },
  { pt: 'Acesso', en: 'Access', es: 'Acceso' },
  { pt: 'Ativo', en: 'Active', es: 'Activo' },
  { pt: 'Desativado', en: 'Disabled', es: 'Desactivado' },

  { pt: 'Ver Vídeo', en: 'Watch Video', es: 'Ver Video' },
  { pt: 'Ver Interface', en: 'View Interface', es: 'Ver Interfaz' },
  { pt: 'Ver Configuração', en: 'View Configuration', es: 'Ver Configuración' },
  { pt: 'Ver Explicação', en: 'View Explanation', es: 'Ver Explicación' },
  { pt: 'Abrir Link', en: 'Open Link', es: 'Abrir Enlace' },
  { pt: 'Copiar Link', en: 'Copy Link', es: 'Copiar Enlace' },
  { pt: 'Link copiado!', en: 'Link copied!', es: 'Enlace copiado!' },
  { pt: 'Copiado!', en: 'Copied!', es: 'Copiado!' },
  { pt: 'Fechar', en: 'Close', es: 'Cerrar' },
  { pt: 'Salvar', en: 'Save', es: 'Guardar' },
  { pt: 'Editar', en: 'Edit', es: 'Editar' },
  { pt: 'Apagar', en: 'Delete', es: 'Eliminar' },
  { pt: 'Cancelar', en: 'Cancel', es: 'Cancelar' },
  { pt: 'Pesquisar comando...', en: 'Search command...', es: 'Buscar comando...' },
  { pt: 'Pesquisar...', en: 'Search...', es: 'Buscar...' },

  { pt: 'Criação de Personagem', en: 'Character Creation', es: 'Creación de Personaje' },
  {
    pt: 'Escolha um rosto e um nome para o seu personagem, este será o seu nome como vendedor. Pode ser o seu próprio ou um fictício.',
    en: 'Choose a face and a name for your character; this will be your seller name. It can be your own name or a fictional one.',
    es: 'Elige un rostro y un nombre para tu personaje; este será tu nombre como vendedor. Puede ser tu propio nombre o uno ficticio.',
  },
  { pt: 'Spawn na Cidade', en: 'Spawn in the City', es: 'Spawn en la Ciudad' },
  {
    pt: 'Você começará nascendo no PIER, a partir daí sua jornada será iniciada.',
    en: 'You will start by spawning at the PIER; from there your journey begins.',
    es: 'Comenzarás apareciendo en el PIER; desde ahí inicia tu jornada.',
  },
  { pt: 'Locais Importantes', en: 'Important Places', es: 'Lugares Importantes' },
  {
    pt: 'Visite facções, organizações, empregos legais, Pier Sul/Norte e a praça. É nesses locais que há uma grande concentração de pessoas — e é justamente nessas regiões que você vai criar conexões e oportunidades.',
    en: 'Visit factions, organizations, legal jobs, South/North Pier and the square. These places concentrate many people, and that is exactly where you will create connections and opportunities.',
    es: 'Visita facciones, organizaciones, empleos legales, Pier Sur/Norte y la plaza. Estos lugares concentran muchas personas, y ahí crearás conexiones y oportunidades.',
  },
  { pt: 'Primeira Interação', en: 'First Interaction', es: 'Primera Interacción' },
  {
    pt: 'Converse com outros players e comece a se integrar na cidade.',
    en: 'Talk to other players and start integrating into the city.',
    es: 'Habla con otros jugadores y empieza a integrarte en la ciudad.',
  },
  { pt: 'Ativar VOIP (Voz)', en: 'Enable VOIP (Voice)', es: 'Activar VOIP (Voz)' },
  { pt: 'Configuração essencial para se comunicar por voz dentro da cidade.', en: 'Essential setup to communicate by voice inside the city.', es: 'Configuración esencial para comunicarte por voz dentro de la ciudad.' },
  { pt: 'Aperte a tecla "P"', en: 'Press the "P" key', es: 'Presiona la tecla "P"' },
  { pt: 'Clique em "Configurações"', en: 'Click "Settings"', es: 'Haz clic en "Ajustes"' },
  { pt: 'Selecione a opção "Bate-Papo"', en: 'Select the "Chat" option', es: 'Selecciona la opción "Chat"' },
  { pt: 'Ative o Bate-Papo de Voz', en: 'Enable Voice Chat', es: 'Activa el Chat de Voz' },
  { pt: 'Ative o Microfone', en: 'Enable the Microphone', es: 'Activa el Micrófono' },
  { pt: 'Modo de Bate-Papo:', en: 'Chat Mode:', es: 'Modo de Chat:' },
  { pt: 'Pressionar para Falar', en: 'Push to Talk', es: 'Presionar para Hablar' },
  { pt: 'Tecla nativa utilizada para falar:', en: 'Native key used to speak:', es: 'Tecla nativa utilizada para hablar:' },
  { pt: 'Departamentos de Polícia', en: 'Police Departments', es: 'Departamentos de Policía' },
  { pt: 'Serviços Essenciais (Hospital, Mecânica, Jurídico, Bombeiros)', en: 'Essential Services (Hospital, Mechanics, Legal, Firefighters)', es: 'Servicios Esenciales (Hospital, Mecánica, Jurídico, Bomberos)' },
  { pt: 'Interações (Praça/Pier)', en: 'Interactions (Square/Pier)', es: 'Interacciones (Plaza/Pier)' },
  { pt: 'Facções', en: 'Factions', es: 'Facciones' },

  {
    pt: 'Conheça os pilares da cidade, desde os serviços públicos até as interações sociais e o mundo do crime.',
    en: 'Learn the pillars of the city, from public services to social interactions and the crime world.',
    es: 'Conoce los pilares de la ciudad, desde los servicios públicos hasta las interacciones sociales y el mundo del crimen.',
  },
  { pt: 'Empregos Legais', en: 'Legal Jobs', es: 'Empleos Legales' },
  { pt: 'Empregos Ilegais', en: 'Illegal Jobs', es: 'Empleos Ilegales' },
  { pt: 'São os trabalhos oficiais da cidade, focados em organização, serviço público e suporte à população.', en: 'These are the official city jobs, focused on organization, public service and support for the population.', es: 'Son los trabajos oficiales de la ciudad, enfocados en organización, servicio público y apoyo a la población.' },
  { pt: 'POLÍCIA', en: 'Police', es: 'Policía' },
  { pt: 'Responsável pela segurança da cidade, combate ao crime e organização das operações policiais.', en: 'Responsible for city security, fighting crime and organizing police operations.', es: 'Responsable de la seguridad de la ciudad, combatir el crimen y organizar operaciones policiales.' },
  { pt: 'EXÉRCITO', en: 'Army', es: 'Ejército' },
  { pt: 'CIVIL', en: 'Civil', es: 'Civil' },
  { pt: 'MILITAR', en: 'Military', es: 'Militar' },
  { pt: 'TÁTICA', en: 'Tactical', es: 'Táctica' },
  { pt: 'MÉDICO (HOSPITAL)', en: 'Doctor (Hospital)', es: 'Médico (Hospital)' },
  { pt: 'Atua no atendimento de feridos, salvando vidas e garantindo o suporte médico da cidade.', en: 'Handles care for injured people, saving lives and ensuring medical support in the city.', es: 'Atiende a heridos, salva vidas y garantiza el soporte médico de la ciudad.' },
  { pt: 'BOMBEIROS', en: 'Firefighters', es: 'Bomberos' },
  { pt: 'Responsável por resgates e emergências, atuando em situações críticas e salvando civis.', en: 'Responsible for rescues and emergencies, acting in critical situations and saving civilians.', es: 'Responsable de rescates y emergencias, actuando en situaciones críticas y salvando civiles.' },
  { pt: 'MECÂNICO', en: 'Mechanic', es: 'Mecánico' },
  { pt: 'Realiza manutenção e reparo de veículos, essencial para o funcionamento da cidade.', en: 'Performs vehicle maintenance and repairs, essential for the city to function.', es: 'Realiza mantenimiento y reparación de vehículos, esencial para el funcionamiento de la ciudad.' },
  { pt: 'JURÍDICO', en: 'Legal', es: 'Jurídico' },
  { pt: 'Atua na defesa e organização das leis, garantindo justiça e equilíbrio dentro da cidade.', en: 'Works in defense and organization of laws, ensuring justice and balance within the city.', es: 'Actúa en la defensa y organización de las leyes, garantizando justicia y equilibrio dentro de la ciudad.' },

  { pt: 'FARM LEITEIRO (DINHEIRO LIMPO)', en: 'Dairy Farm (Clean Money)', es: 'Farm Lechero (Dinero Limpio)' },
  { pt: 'FARM PESCARIA (DINHEIRO LIMPO)', en: 'Fishing Farm (Clean Money)', es: 'Farm de Pesca (Dinero Limpio)' },
  { pt: 'FARM ATIVO (FACÇÃO)', en: 'Active Farm (Faction)', es: 'Farm Activo (Facción)' },
  { pt: 'FARM AFK (FACÇÃO)', en: 'AFK Farm (Faction)', es: 'Farm AFK (Facción)' },
  {
    pt: 'Esses são os principais sistemas de farm da cidade, responsáveis por gerar recursos e dinheiro. Cada farm possui uma função específica e pode ser utilizado de acordo com seu objetivo dentro do RP.',
    en: 'These are the main farm systems in the city, responsible for generating resources and money. Each farm has a specific purpose and can be used according to your RP objective.',
    es: 'Estos son los principales sistemas de farmeo de la ciudad, responsables de generar recursos y dinero. Cada farm tiene una función específica y puede usarse según tu objetivo dentro del RP.',
  },
  { pt: 'farm da cidade', en: 'city farming', es: 'farmeo de la ciudad' },
  { pt: 'Produz garrafas de leite que podem ser convertidas em dinheiro limpo 💰.', en: 'Produces milk bottles that can be converted into clean money 💰.', es: 'Produce botellas de leche que pueden convertirse en dinero limpio 💰.' },
  { pt: 'Produz peixes 🐟 que podem ser vendidos para gerar dinheiro limpo 💰.', en: 'Produces fish 🐟 that can be sold to generate clean money 💰.', es: 'Produce peces 🐟 que pueden venderse para generar dinero limpio 💰.' },
  { pt: 'Farm voltado para facções, onde é necessário interação constante do jogador.', en: 'Farm aimed at factions, where constant player interaction is required.', es: 'Farm dirigido a facciones, donde se requiere interacción constante del jugador.' },
  { pt: 'Farm voltado para facções, que funciona de forma automática (AFK).', en: 'Farm aimed at factions that works automatically (AFK).', es: 'Farm dirigido a facciones que funciona automáticamente (AFK).' },
  { pt: 'Resumo', en: 'Summary', es: 'Resumen' },
  { pt: 'Os farms são essenciais para gerar renda dentro da cidade — seja de forma individual ou em grupo (facção).', en: 'Farms are essential for generating income in the city, either individually or in a group (faction).', es: 'Los farms son esenciales para generar ingresos en la ciudad, ya sea de forma individual o en grupo (facción).' },

  { pt: 'Definição de Roleplay', en: 'Roleplay Definition', es: 'Definición de Roleplay' },
  {
    pt: "O Roleplay (interpretado como 'RP') é a arte de atuar como um personagem dentro de um universo fictício, respeitando sua personalidade, motivações e limitações. É como um teatro improvisado em tempo real, onde cada interação constrói uma história única. Na SantaGroup, o seu papel como vendedor exige que você mantenha a imersão total, tratando conversas técnicas de vendas como 'consultorias especializadas' integradas ao contexto da cidade.",
    en: "Roleplay (known as 'RP') is the art of acting as a character inside a fictional universe, respecting their personality, motivations and limits. It is like improvised theater in real time, where each interaction builds a unique story. At SantaGroup, your role as a seller requires full immersion, treating technical sales conversations as 'specialized consultations' integrated into the city's context.",
    es: "Roleplay (conocido como 'RP') es el arte de actuar como un personaje dentro de un universo ficticio, respetando su personalidad, motivaciones y límites. Es como teatro improvisado en tiempo real, donde cada interacción construye una historia única. En SantaGroup, tu papel como vendedor exige inmersión total, tratando conversaciones técnicas de ventas como 'consultorías especializadas' integradas al contexto de la ciudad.",
  },
  { pt: 'Regras Fundamentais', en: 'Fundamental Rules', es: 'Reglas Fundamentales' },
  { pt: 'Proibido usar qualquer tipo de veículo como arma para atropelar ou ferir outros cidadãos.', en: 'It is forbidden to use any vehicle as a weapon to run over or harm other citizens.', es: 'Está prohibido usar cualquier vehículo como arma para atropellar o herir a otros ciudadanos.' },
  { pt: 'Proibido ferir ou matar um cidadão sem que haja um motivo plausível dentro da história.', en: 'It is forbidden to hurt or kill a citizen without a plausible reason inside the story.', es: 'Está prohibido herir o matar a un ciudadano sin un motivo plausible dentro de la historia.' },
  { pt: 'Proibido utilizar informações obtidas fora do jogo (Discord, Lives) para ganho próprio dentro do RP.', en: 'It is forbidden to use information obtained outside the game (Discord, livestreams) for personal gain inside RP.', es: 'Está prohibido usar información obtenida fuera del juego (Discord, directos) para beneficio propio dentro del RP.' },
  { pt: 'Proibido agir de forma que fira a lógica da vida real ou quebre a imersão do cenário atual.', en: 'It is forbidden to act in a way that breaks real-life logic or the immersion of the current scene.', es: 'Está prohibido actuar de forma que rompa la lógica de la vida real o la inmersión del escenario actual.' },
  { pt: 'Proibido realizar ações impossíveis ou forçar situações onde o outro jogador não tenha escolha.', en: 'It is forbidden to perform impossible actions or force situations where the other player has no choice.', es: 'Está prohibido realizar acciones imposibles o forzar situaciones donde el otro jugador no tenga opción.' },
  { pt: 'Regra de ouro: trate a vida do seu personagem como se fosse a única. Valorize-a acima de tudo.', en: 'Golden rule: treat your character life as if it were the only one. Value it above everything.', es: 'Regla de oro: trata la vida de tu personaje como si fuera la única. Valórala por encima de todo.' },
  { pt: 'Amor à Vida', en: 'Value Life', es: 'Amor a la Vida' },

  { pt: 'Comandos do Jogo', en: 'Game Commands', es: 'Comandos del Juego' },
  { pt: 'Comandos Detalhados', en: 'Detailed Commands', es: 'Comandos Detallados' },
  { pt: 'Tecla', en: 'Key', es: 'Tecla' },
  { pt: 'Comando', en: 'Command', es: 'Comando' },
  { pt: 'O que faz', en: 'What it does', es: 'Qué hace' },
  { pt: 'Quando usar', en: 'When to use', es: 'Cuándo usar' },
  { pt: 'Exemplo / Atalhos', en: 'Example / Shortcuts', es: 'Ejemplo / Atajos' },
  { pt: 'Nota', en: 'Note', es: 'Nota' },
  { pt: 'Movimentar o personagem', en: 'Move the character', es: 'Mover el personaje' },
  { pt: 'Pular obstáculos', en: 'Jump obstacles', es: 'Saltar obstáculos' },
  { pt: 'Abrir celular', en: 'Open phone', es: 'Abrir celular' },
  { pt: 'Abrir inventário', en: 'Open inventory', es: 'Abrir inventario' },
  { pt: 'Trancar/destrancar veículo', en: 'Lock/unlock vehicle', es: 'Bloquear/desbloquear vehículo' },
  { pt: 'Aceitar ação/comando', en: 'Accept action/command', es: 'Aceptar acción/comando' },
  { pt: 'Recusar ação/comando', en: 'Reject action/command', es: 'Rechazar acción/comando' },
  { pt: 'Abrir painel principal', en: 'Open main panel', es: 'Abrir panel principal' },
  { pt: 'Cancelar animação', en: 'Cancel animation', es: 'Cancelar animación' },
  { pt: 'Abrir console de comandos', en: 'Open command console', es: 'Abrir consola de comandos' },
  { pt: 'Abrir chat global/local', en: 'Open global/local chat', es: 'Abrir chat global/local' },
  { pt: 'Menu de configurações do jogo', en: 'Game settings menu', es: 'Menú de ajustes del juego' },
  { pt: 'Pressionar para falar (VOIP)', en: 'Push to talk (VOIP)', es: 'Presionar para hablar (VOIP)' },
  { pt: 'Menu principal', en: 'Main menu', es: 'Menú principal' },
  { pt: 'Selecionar armas ou ferramentas', en: 'Select weapons or tools', es: 'Seleccionar armas o herramientas' },
  { pt: 'Abrir porta-malas do veículo', en: 'Open vehicle trunk', es: 'Abrir maletero del vehículo' },
  { pt: 'Interação de contexto', en: 'Context interaction', es: 'Interacción de contexto' },
  { pt: 'Executar animações rápidas', en: 'Run quick animations', es: 'Ejecutar animaciones rápidas' },
  { pt: 'Navegação básica', en: 'Basic navigation', es: 'Navegación básica' },
  { pt: 'Ultrapassar objetos', en: 'Get past objects', es: 'Superar objetos' },
  { pt: 'Apps e chamadas', en: 'Apps and calls', es: 'Apps y llamadas' },
  { pt: 'Ver itens', en: 'View items', es: 'Ver objetos' },
  { pt: 'Segurança', en: 'Security', es: 'Seguridad' },
  { pt: 'Interação', en: 'Interaction', es: 'Interacción' },
  { pt: 'Sistemas e stats', en: 'Systems and stats', es: 'Sistemas y estadísticas' },
  { pt: 'Bugs visuais', en: 'Visual bugs', es: 'Bugs visuales' },
  { pt: 'Digitar comandos', en: 'Type commands', es: 'Escribir comandos' },
  { pt: 'Falar por texto', en: 'Speak by text', es: 'Hablar por texto' },
  { pt: 'Ajustes', en: 'Settings', es: 'Ajustes' },
  { pt: 'Comunicação voz', en: 'Voice communication', es: 'Comunicación por voz' },
  { pt: 'Navegação geral', en: 'General navigation', es: 'Navegación general' },
  { pt: 'Acesso rápido', en: 'Quick access', es: 'Acceso rápido' },
  { pt: 'Interação veículo', en: 'Vehicle interaction', es: 'Interacción con vehículo' },
  { pt: 'Falar com NPCs/Players', en: 'Talk to NPCs/Players', es: 'Hablar con NPCs/Jugadores' },
  { pt: 'Expressão corporal', en: 'Body expression', es: 'Expresión corporal' },
  { pt: 'Andar pela cidade', en: 'Walk around the city', es: 'Caminar por la ciudad' },
  { pt: 'Subir em algo', en: 'Climb onto something', es: 'Subir a algo' },
  { pt: 'Chamar mecânico', en: 'Call a mechanic', es: 'Llamar al mecánico' },
  { pt: 'Equipar peça', en: 'Equip item', es: 'Equipar pieza' },
  { pt: 'Sair e trancar carro', en: 'Exit and lock the car', es: 'Salir y cerrar el auto' },
  { pt: 'Confirmar serviço', en: 'Confirm service', es: 'Confirmar servicio' },
  { pt: 'Negar proposta', en: 'Deny proposal', es: 'Negar propuesta' },
  { pt: 'Ver vendas', en: 'View sales', es: 'Ver ventas' },
  { pt: 'Sair de pose', en: 'Exit pose', es: 'Salir de pose' },
  { pt: 'Pedir ajuda rádio', en: 'Ask for radio help', es: 'Pedir ayuda por radio' },
  { pt: 'Mudar VOIP', en: 'Change VOIP', es: 'Cambiar VOIP' },
  { pt: 'Falar com cliente', en: 'Talk to client', es: 'Hablar con cliente' },
  { pt: 'Sair ou Mapas', en: 'Exit or Maps', es: 'Salir o Mapas' },
  { pt: 'Sacar item', en: 'Draw item', es: 'Sacar objeto' },
  { pt: 'Guardar loot', en: 'Store loot', es: 'Guardar loot' },
  { pt: 'Ver menus dinâmicos', en: 'View dynamic menus', es: 'Ver menús dinámicos' },
  { pt: 'Movimento vertical', en: 'Vertical movement', es: 'Movimiento vertical' },
  { pt: 'Comunicação rádio/celular', en: 'Radio/phone communication', es: 'Comunicación radio/celular' },
  { pt: 'Gerenciamento de recursos', en: 'Resource management', es: 'Gestión de recursos' },
  { pt: 'Sempre trancar ao sair', en: 'Always lock when leaving', es: 'Siempre bloquear al salir' },
  { pt: 'Confirmação rápida', en: 'Quick confirmation', es: 'Confirmación rápida' },
  { pt: 'Cancelamento rápido', en: 'Quick cancellation', es: 'Cancelación rápida' },
  { pt: 'Menu de sistemas SantaGroup', en: 'SantaGroup systems menu', es: 'Menú de sistemas SantaGroup' },
  { pt: 'Reset de estado', en: 'State reset', es: 'Reinicio de estado' },
  { pt: 'Uso administrativo', en: 'Administrative use', es: 'Uso administrativo' },
  { pt: 'Comunicação escrita', en: 'Written communication', es: 'Comunicación escrita' },
  { pt: 'Config do FiveM', en: 'FiveM settings', es: 'Config de FiveM' },
  { pt: 'Use "Apertar para Falar"', en: 'Use "Push to Talk"', es: 'Usa "Presionar para Hablar"' },
  { pt: 'Painel padrão', en: 'Default panel', es: 'Panel predeterminado' },
  { pt: 'Slots rápidos do inventário', en: 'Quick inventory slots', es: 'Slots rápidos del inventario' },
  { pt: 'Gestão de carga', en: 'Cargo management', es: 'Gestión de carga' },
  { pt: 'Tecla de contato principal', en: 'Main contact key', es: 'Tecla principal de contacto' },
  { pt: 'Setas: ↑ Continência | ↓ Assoviar | ← Joia | → Desapontado', en: 'Arrows: ↑ Salute | ↓ Whistle | ← Thumbs up | → Disappointed', es: 'Flechas: ↑ Saludo | ↓ Silbar | ← Me gusta | → Decepcionado' },
  { pt: 'Navegue pelas setas para emotes instantâneos', en: 'Use the arrows for instant emotes', es: 'Usa las flechas para emotes instantáneos' },

  { pt: 'CHAMADOS COMPRAS', en: 'Purchase Tickets', es: 'Llamados de Compras' },
  { pt: 'COMPRAS', en: 'Purchases', es: 'Compras' },
  { pt: 'BUSCAR VENDAS', en: 'Search Sales', es: 'Buscar Ventas' },
  { pt: 'INICIAR ATENDIMENTO MANUAL', en: 'Start Manual Service', es: 'Iniciar Atención Manual' },
  { pt: 'CLIENTES', en: 'Clients', es: 'Clientes' },
  { pt: 'VENDAS PESSOAIS', en: 'Personal Sales', es: 'Ventas Personales' },
  { pt: 'Principal 01', en: 'Main 01', es: 'Principal 01' },
  { pt: 'Principal 02', en: 'Main 02', es: 'Principal 02' },
  { pt: 'Gerenciamento de chamados de compras ativos na cidade.', en: 'Management of active purchase tickets in the city.', es: 'Gestión de llamados de compras activos en la ciudad.' },
  { pt: 'Visualização detalhada das compras realizadas pelos cidadãos.', en: 'Detailed view of purchases made by citizens.', es: 'Visualización detallada de las compras realizadas por ciudadanos.' },
  { pt: 'Sistema onde você busca clientes de acordo com o Tier que você estiver.', en: 'System where you search for clients according to your current Tier.', es: 'Sistema donde buscas clientes según el Tier en el que estés.' },
  { pt: 'Sistema onde voce consegue iniciar um atendimento sem precisar do BUSCAR VENDAS.', en: 'System where you can start a service without needing Search Sales.', es: 'Sistema donde puedes iniciar una atención sin necesitar Buscar Ventas.' },
  { pt: 'Lista completa de clientes vinculados ao seu perfil de vendedor.', en: 'Complete list of clients linked to your seller profile.', es: 'Lista completa de clientes vinculados a tu perfil de vendedor.' },
  { pt: 'Acompanhamento do seu desempenho e histórico de vendas individuais.', en: 'Track your performance and individual sales history.', es: 'Seguimiento de tu desempeño e historial de ventas individuales.' },

  { pt: 'Responsável por regras da cidade', en: 'Responsible for city rules', es: 'Responsable de las reglas de la ciudad' },
  { pt: 'Aplica punições gerais (ban, advertência, etc)', en: 'Applies general punishments (ban, warning, etc.)', es: 'Aplica sanciones generales (ban, advertencia, etc.)' },
  { pt: 'Resolve tudo relacionado a administração', en: 'Handles everything related to administration', es: 'Resuelve todo lo relacionado con administración' },
  { pt: 'Responsável por vendas', en: 'Responsible for sales', es: 'Responsable de ventas' },
  { pt: 'Benefícios e produtos', en: 'Benefits and products', es: 'Beneficios y productos' },
  { pt: 'Relacionamento com cliente', en: 'Customer relationship', es: 'Relación con cliente' },
  { pt: 'Punições (Banimentos apenas por questões comerciais)', en: 'Punishments (Bans only for commercial matters)', es: 'Sanciones (Baneos solo por asuntos comerciales)' },
  { pt: 'Diretrizes e Direcionamentos', en: 'Guidelines and Directions', es: 'Directrices y Orientaciones' },
  { pt: 'Hierarquia da Operação', en: 'Operations Hierarchy', es: 'Jerarquía de Operación' },
  { pt: 'Regra de Ouro', en: 'Golden Rule', es: 'Regla de Oro' },

  { pt: 'Facções de Armas e Munições', en: 'Weapons and Ammo Factions', es: 'Facciones de Armas y Municiones' },
  { pt: 'Facções de Drogas', en: 'Drug Factions', es: 'Facciones de Drogas' },
  { pt: 'Facções de Desmanche', en: 'Chop Shop Factions', es: 'Facciones de Desguace' },
  { pt: 'Facções de Lavagem', en: 'Money Laundering Factions', es: 'Facciones de Lavado' },
  { pt: 'Locais de Interação', en: 'Interaction Places', es: 'Lugares de Interacción' },
  { pt: 'PRAÇA', en: 'Square', es: 'Plaza' },
  { pt: 'PIER SUL', en: 'South Pier', es: 'Pier Sur' },
  { pt: 'PIER NORTE', en: 'North Pier', es: 'Pier Norte' },
  { pt: 'São pontos da cidade com grande movimentação, ideais para conhecer pessoas, criar conexões e iniciar interações.', en: 'These are busy city spots, ideal for meeting people, creating connections and starting interactions.', es: 'Son puntos de la ciudad con mucho movimiento, ideales para conocer personas, crear conexiones e iniciar interacciones.' },
  { pt: 'Um dos principais pontos de encontro da cidade, com grande fluxo de jogadores.', en: 'One of the main meeting points in the city, with a large flow of players.', es: 'Uno de los principales puntos de encuentro de la ciudad, con gran flujo de jugadores.' },
  { pt: 'Local movimentado, ideal para interações rápidas e oportunidades de conversa.', en: 'Busy location, ideal for quick interactions and conversation opportunities.', es: 'Lugar concurrido, ideal para interacciones rápidas y oportunidades de conversación.' },
  { pt: 'Outro ponto estratégico de interação, com presença constante de jogadores.', en: 'Another strategic interaction point, with constant player presence.', es: 'Otro punto estratégico de interacción, con presencia constante de jugadores.' },

  { pt: 'PODE', en: 'Allowed', es: 'Permitido' },
  { pt: 'NÃO PODE', en: 'Not Allowed', es: 'No Permitido' },
  { pt: 'Interagir com todos os cidadãos livremente', en: 'Interact freely with all citizens', es: 'Interactuar libremente con todos los ciudadanos' },
  { pt: 'Criar uma história cativante para vender melhor', en: 'Create an engaging story to sell better', es: 'Crear una historia atractiva para vender mejor' },
  { pt: 'Ser imparcial em conflitos de terceiros', en: 'Be impartial in third-party conflicts', es: 'Ser imparcial en conflictos de terceros' },
  { pt: 'Fazer amizades genuínas nas organizações', en: 'Build genuine friendships in organizations', es: 'Hacer amistades genuinas en las organizaciones' },
  { pt: 'Quebrar RP (Sair do personagem)', en: 'Break RP (Leave character)', es: 'Romper RP (Salir del personaje)' },
  { pt: 'Abusar de poderes para benefício próprio', en: 'Abuse powers for personal benefit', es: 'Abusar de poderes para beneficio propio' },
  { pt: 'Causar brigas tóxicas com outros players', en: 'Cause toxic fights with other players', es: 'Causar peleas tóxicas con otros jugadores' },
  { pt: 'Usar cheats, hacks ou bugs conhecidos', en: 'Use cheats, hacks or known bugs', es: 'Usar cheats, hacks o bugs conocidos' },
  { pt: 'Alterar preços oficiais definidos pela SantaGroup', en: 'Change official prices defined by SantaGroup', es: 'Alterar precios oficiales definidos por SantaGroup' },
  { pt: 'Dar brindes ou itens sem autorização prévia', en: 'Give gifts or items without prior authorization', es: 'Dar regalos u objetos sin autorización previa' },

  { pt: 'SEMPRE PERGUNTE', en: 'Always Ask', es: 'Siempre Pregunta' },
  { pt: 'COMECE SIMPLES', en: 'Start Simple', es: 'Empieza Simple' },
  { pt: 'QUALIDADE', en: 'Quality', es: 'Calidad' },
  { pt: 'ATENDIMENTO', en: 'Service', es: 'Atención' },
  { pt: 'Em caso de dúvida técnica ou sobre RP, chame alguém mais experiente ou suporte via Discord.', en: 'If you have a technical or RP question, call someone more experienced or support on Discord.', es: 'Si tienes una duda técnica o sobre RP, llama a alguien más experimentado o al soporte por Discord.' },
  { pt: 'Crie relações primeiro. Vendas são consequências de boas conexões na cidade.', en: 'Build relationships first. Sales are the consequence of good connections in the city.', es: 'Crea relaciones primero. Las ventas son consecuencia de buenas conexiones en la ciudad.' },
  { pt: 'Lembre-se que o pós-venda é mais importante que a venda em si para manter o cliente.', en: 'Remember that after-sales service is more important than the sale itself to retain the client.', es: 'Recuerda que la postventa es más importante que la venta en sí para mantener al cliente.' },
  { pt: 'Conheça bem o produto. A autoridade no assunto gera confiança imediata.', en: 'Know the product well. Authority on the subject creates immediate trust.', es: 'Conoce bien el producto. La autoridad en el tema genera confianza inmediata.' },

  { pt: 'Binds Essenciais (Vendedor)', en: 'Essential Binds (Seller)', es: 'Binds Esenciales (Vendedor)' },
  { pt: 'OBJETIVO', en: 'Objective', es: 'Objetivo' },
  { pt: 'COMO USAR AS BINDS', en: 'How to Use Binds', es: 'Cómo Usar las Binds' },
  { pt: 'BINDS RECOMENDADAS', en: 'Recommended Binds', es: 'Binds Recomendadas' },
  { pt: 'Copiar Bind', en: 'Copy Bind', es: 'Copiar Bind' },
  { pt: 'OBSERVAÇÃO IMPORTANTE', en: 'Important Note', es: 'Observación Importante' },
  { pt: 'Pressione F8', en: 'Press F8', es: 'Presiona F8' },
  { pt: 'Cole o comando', en: 'Paste the command', es: 'Pega el comando' },
  { pt: 'Aperte Enter', en: 'Press Enter', es: 'Presiona Enter' },
  { pt: 'Facilitar ações rápidas no dia a dia e ganhar agilidade no atendimento', en: 'Make daily quick actions easier and gain speed in service', es: 'Facilitar acciones rápidas del día a día y ganar agilidad en la atención' },

  { pt: 'Configurações', en: 'Settings', es: 'Ajustes' },
  { pt: 'Contas de Acesso', en: 'Access Accounts', es: 'Cuentas de Acceso' },
  { pt: 'Configuração do Site', en: 'Site Settings', es: 'Configuración del Sitio' },
  { pt: 'Criar Nova Conta', en: 'Create New Account', es: 'Crear Nueva Cuenta' },
  { pt: 'Nome Completo', en: 'Full Name', es: 'Nombre Completo' },
  { pt: 'Nome da Categoria', en: 'Category Name', es: 'Nombre de Categoría' },
  { pt: 'Grupo do Menu', en: 'Menu Group', es: 'Grupo del Menú' },
  { pt: 'Ícone', en: 'Icon', es: 'Ícono' },
  { pt: 'Estrutura Visual', en: 'Visual Structure', es: 'Estructura Visual' },
  { pt: 'Status', en: 'Status', es: 'Estado' },
  { pt: 'Ações', en: 'Actions', es: 'Acciones' },
  { pt: 'Carregando...', en: 'Loading...', es: 'Cargando...' },
  { pt: 'Adicionar texto', en: 'Add text', es: 'Agregar texto' },
  { pt: 'Adicionar bloco de conteúdo', en: 'Add content block', es: 'Agregar bloque de contenido' },
  { pt: 'Adicionar imagem', en: 'Add image', es: 'Agregar imagen' },
  { pt: 'Adicionar grid/cards', en: 'Add grid/cards', es: 'Agregar grid/cards' },
  { pt: 'Bloco', en: 'Block', es: 'Bloque' },
  { pt: 'Título', en: 'Title', es: 'Título' },
  { pt: 'Itens do grid', en: 'Grid items', es: 'Elementos del grid' },
  { pt: 'Conteúdo', en: 'Content', es: 'Contenido' },
  { pt: 'Aguardando conteúdo ser configurado pelo Owner...', en: 'Waiting for content to be configured by the Owner...', es: 'Esperando que el Owner configure el contenido...' },

  // Audit corrections and coverage for EN/ES.
  { pt: 'SERVIÇOS ESSENCIAIS (HOSPITAL, MECÂNICA, JURÍDICO, BOMBEIROS)', en: 'ESSENTIAL SERVICES (HOSPITAL, MECHANIC, LEGAL, FIREFIGHTERS)', es: 'SERVICIOS ESENCIALES (HOSPITAL, MECÁNICO, SERVICIOS LEGALES, BOMBEROS)' },
  { pt: 'Empregos Legais', en: 'Legal Jobs', es: 'Trabajos Legales' },
  { pt: 'Empregos Ilegais', en: 'Illegal Jobs', es: 'Trabajos Ilegales' },
  { pt: 'São organizações criminosas que dominam áreas da cidade e controlam produções ilegais.', en: 'Criminal organizations that control areas of the city and manage illegal production operations.', es: 'Son organizaciones criminales que controlan zonas de la ciudad y gestionan producciones ilegales.' },
  { pt: 'Facções de Armas e Munições', en: 'Weapons and Ammunition Factions', es: 'Facciones de Armas y Municiones' },
  { pt: 'Responsáveis pela produção de armamentos e recursos de combate dentro da cidade.', en: 'Responsible for producing weapons and combat resources within the city.', es: 'Responsables de la producción de armamento y recursos de combate dentro de la ciudad.' },
  { pt: 'CADA FACÇÃO É LIMITADA A APENAS UM TIPO DE PRODUÇÃO — NENHUMA FACÇÃO PRODUZ MAIS DE UM TIPO.', en: 'EACH FACTION IS LIMITED TO ONLY ONE TYPE OF PRODUCTION — NO FACTION PRODUCES MORE THAN ONE TYPE.', es: 'CADA FACCIÓN ESTÁ LIMITADA A UN ÚNICO TIPO DE PRODUCCIÓN — NINGUNA FACCIÓN PUEDE PRODUCIR MÁS DE UN TIPO.' },
  { pt: 'ARMAS', en: 'WEAPONS', es: 'ARMAS' },
  { pt: 'Produção de armamentos, como pistolas e fuzis. Essencial para abastecer confrontos e operações.', en: 'Produces weapons such as pistols and rifles. Essential for supplying conflicts and operations.', es: 'Produce armamento, como pistolas y rifles. Esencial para abastecer enfrentamientos y operaciones.' },
  { pt: 'MUNIÇÕES', en: 'AMMUNITION', es: 'MUNICIONES' },
  { pt: 'Produção de munições para as armas. Fundamental para manter o funcionamento dos armamentos.', en: 'Produces ammunition for weapons. Essential for keeping weapons operational.', es: 'Produce municiones para las armas. Esencial para mantener el armamento operativo.' },
  { pt: 'Facções de Drogas', en: 'Drug Factions', es: 'Facciones de Drogas' },
  { pt: 'Produzem substâncias ilegais, cada uma com efeitos diferentes dentro da cidade.', en: 'Produce illegal substances, each with different effects within the city.', es: 'Producen sustancias ilegales, cada una con diferentes efectos dentro de la ciudad.' },
  { pt: 'CADA FACÇÃO É LIMITADA A APENAS UM TIPO DE PRODUÇÃO — NENHUMA FACÇÃO PRODUZ MAIS DE UMA SUBSTÂNCIA.', en: 'EACH FACTION IS LIMITED TO ONLY ONE TYPE OF PRODUCTION — NO FACTION PRODUCES MORE THAN ONE SUBSTANCE.', es: 'CADA FACCIÓN ESTÁ LIMITADA A UN ÚNICO TIPO DE PRODUCCIÓN — NINGUNA FACCIÓN PUEDE PRODUCIR MÁS DE UNA SUSTANCIA.' },
  { pt: 'COCAÍNA', en: 'COCAINE', es: 'COCAÍNA' },
  { pt: 'Aumenta a velocidade do personagem por um período de tempo.', en: "Increases the character's movement speed for a period of time.", es: 'Aumenta la velocidad de movimiento del personaje durante un período de tiempo.' },
  { pt: 'METANFETAMINA', en: 'METHAMPHETAMINE', es: 'METANFETAMINA' },
  { pt: 'Realiza a cura da vida e do colete.', en: 'Restores health and armor.', es: 'Restaura la vida y el chaleco.' },
  { pt: 'BASEADO', en: 'MARIJUANA', es: 'MARIHUANA' },
  { pt: 'Também realiza a cura da vida e do colete.', en: 'Also restores health and armor.', es: 'También restaura la vida y el chaleco.' },
  { pt: 'COMERCIALIZAÇÃO DAS FACÇÕES → ARMAS / MUNIÇÕES / DROGAS', en: 'FACTION TRADE → WEAPONS / AMMUNITION / DRUGS', es: 'COMERCIALIZACIÓN DE LAS FACCIONES → ARMAS / MUNICIONES / DROGAS' },
  { pt: 'As facções não apenas produzem, mas também são responsáveis pela distribuição e venda dos produtos gerados.', en: 'Factions not only produce items but are also responsible for distributing and selling what they produce.', es: 'Las facciones no solo producen, sino que también son responsables de distribuir y vender los productos generados.' },
  { pt: 'CADA FACÇÃO SÓ PODE REALIZAR A VENDA DOS PRODUTOS QUE ELA MESMA PRODUZ.', en: 'EACH FACTION MAY ONLY SELL THE PRODUCTS IT PRODUCES.', es: 'CADA FACCIÓN SOLO PUEDE VENDER LOS PRODUCTOS QUE ELLA MISMA PRODUCE.' },
  { pt: 'NÃO É PERMITIDO COMERCIALIZAR ITENS DE OUTRAS PRODUÇÕES.', en: 'SELLING ITEMS PRODUCED BY OTHER FACTIONS IS NOT ALLOWED.', es: 'NO ESTÁ PERMITIDO COMERCIALIZAR ARTÍCULOS PRODUCIDOS POR OTRAS FACCIONES.' },
  { pt: 'Responsáveis pelo desmanche de veículos dentro da cidade.', en: 'Responsible for dismantling vehicles within the city.', es: 'Responsables del desmantelamiento de vehículos dentro de la ciudad.' },
  { pt: 'Quando um veículo é desmanchado, ele é convertido em dinheiro sujo.', en: 'When a vehicle is dismantled, it is converted into dirty money.', es: 'Cuando un vehículo es desmantelado, se convierte en dinero sucio.' },
  { pt: 'Esse dinheiro não pode ser utilizado diretamente, sendo necessário procurar uma facção de lavagem para a conversão em dinheiro limpo.', en: 'This money cannot be used directly. It must be taken to a money laundering faction and converted into clean money.', es: 'Este dinero no puede utilizarse directamente. Debe ser llevado a una facción de lavado para convertirlo en dinero limpio.' },
  { pt: 'Responsáveis por lavar todo o dinheiro sujo da cidade.', en: 'Responsible for laundering dirty money throughout the city.', es: 'Responsables de lavar el dinero sucio de toda la ciudad.' },
  { pt: 'INCLUI VALORES DE:', en: 'INCLUDES MONEY FROM:', es: 'INCLUYE DINERO PROCEDENTE DE:' },
  { pt: 'Rotas de drogas', en: 'Drug Routes', es: 'Rutas de Drogas' },
  { pt: 'Veículos desmanchados', en: 'Dismantled Vehicles', es: 'Vehículos Desmantelados' },
  { pt: 'Assaltos (Pequeno, Médio e Grande porte)', en: 'Robberies (Small, Medium and Large)', es: 'Robos (Pequeños, Medianos y Grandes)' },
  { pt: 'DIVISÃO DA LAVAGEM', en: 'LAUNDERING SPLIT', es: 'DISTRIBUCIÓN DEL LAVADO' },
  { pt: 'Uma porcentagem fica com a facção de lavagem.', en: 'A percentage is kept by the money laundering faction.', es: 'Un porcentaje se queda con la facción de lavado.' },
  { pt: 'Outra porcentagem vai para quem levou o dinheiro.', en: 'Another percentage goes to the person who brought the money.', es: 'Otro porcentaje se entrega a la persona que llevó el dinero.' },
  { pt: 'Após a lavagem, o dinheiro se torna limpo e utilizável dentro da economia da cidade.', en: "After laundering, the money becomes clean and can be used within the city's economy.", es: 'Después del lavado, el dinero se convierte en dinero limpio y puede utilizarse dentro de la economía de la ciudad.' },
  { pt: 'REGRA IMPORTANTE', en: 'IMPORTANT RULE', es: 'REGLA IMPORTANTE' },
  { pt: 'Cada facção atua em sua função específica dentro da economia ilegal.', en: 'Each faction performs a specific role within the illegal economy.', es: 'Cada facción desempeña una función específica dentro de la economía ilegal.' },
  { pt: 'PRODUÇÃO > CONVERSÃO (SUJO) > LAVAGEM > DINHEIRO LIMPO', en: 'PRODUCTION > DIRTY MONEY CONVERSION > LAUNDERING > CLEAN MONEY', es: 'PRODUCCIÓN > CONVERSIÓN A DINERO SUCIO > LAVADO > DINERO LIMPIO' },
  { pt: 'Locais de Interação', en: 'Interaction Locations', es: 'Lugares de Interacción' },
  { pt: 'Esses são os principais sistemas de farm da cidade, responsáveis por gerar recursos e dinheiro. Cada farm possui uma função específica e pode ser utilizado de acordo com seu objetivo dentro do RP.', en: "These are the city's main farming systems, responsible for generating resources and money. Each farm has a specific purpose and can be used according to the player's goals within the roleplay experience.", es: 'Estos son los principales sistemas de farmeo de la ciudad, responsables de generar recursos y dinero. Cada farm tiene una función específica y puede utilizarse de acuerdo con los objetivos del jugador dentro del RP.' },
  { pt: 'RESUMO', en: 'SUMMARY', es: 'RESUMEN' },
  { pt: 'Regras Fundamentais', en: 'Fundamental Rules', es: 'Reglas Fundamentales' },
  { pt: 'Comandos do Jogo', en: 'Game Commands', es: 'Comandos del Juego' },
  { pt: 'Espaço', en: 'SPACE', es: 'ESPACIO' },
  { pt: 'Setas', en: 'ARROWS', es: 'FLECHAS' },
  { pt: 'Produção de armamentos 🔫 (pistolas, fuzis, etc). Essencial para abastecer confrontos e operações.', en: 'Produces weapons 🔫 (pistols, rifles, etc.). Essential for supplying conflicts and operations.', es: 'Produce armamento 🔫 (pistolas, rifles, etc.). Esencial para abastecer enfrentamientos y operaciones.' },
  { pt: 'Produção de munições 💥 para as armas. Fundamental para manter o funcionamento dos armamentos.', en: 'Produces ammunition 💥 for weapons. Essential for keeping weapons operational.', es: 'Produce municiones 💥 para las armas. Esencial para mantener el armamento operativo.' },
  { pt: 'Aumenta a velocidade do personagem 🏃‍♂️ por um período de tempo.', en: "Increases the character's movement speed 🏃‍♂️ for a period of time.", es: 'Aumenta la velocidad de movimiento del personaje 🏃‍♂️ durante un período de tiempo.' },
  { pt: 'Realiza a cura da vida ❤️ e do colete 🛡️.', en: 'Restores health ❤️ and armor 🛡️.', es: 'Restaura la vida ❤️ y el chaleco 🛡️.' },
  { pt: 'Também realiza a cura da vida ❤️ e do colete 🛡️.', en: 'Also restores health ❤️ and armor 🛡️.', es: 'También restaura la vida ❤️ y el chaleco 🛡️.' },
  { pt: 'Quando um veículo é desmanchado, ele é convertido em', en: 'When a vehicle is dismantled, it is converted into', es: 'Cuando un vehículo es desmantelado, se convierte en' },
  { pt: 'dinheiro sujo 💰', en: 'dirty money 💰', es: 'dinero sucio 💰' },
  { pt: 'Esse dinheiro não pode ser utilizado diretamente, sendo necessário procurar uma facção de lavagem para a conversão de dinheiro limpo.', en: 'This money cannot be used directly. It must be taken to a money laundering faction and converted into clean money.', es: 'Este dinero no puede utilizarse directamente. Debe ser llevado a una facción de lavado para convertirlo en dinero limpio.' },
  { pt: 'Inclui valores de:', en: 'Includes money from:', es: 'Incluye dinero procedente de:' },
  { pt: 'Uma porcentagem fica com a facção de lavagem', en: 'A percentage is kept by the money laundering faction', es: 'Un porcentaje se queda con la facción de lavado' },
  { pt: 'Outra porcentagem vai para quem levou o dinheiro', en: 'Another percentage goes to the person who brought the money', es: 'Otro porcentaje se entrega a la persona que llevó el dinero' },
  { pt: 'Após a lavagem, o dinheiro se torna limpo e utilizável dentro da economia da cidade.', en: "After laundering, the money becomes clean and can be used within the city's economy.", es: 'Después del lavado, el dinero se convierte en dinero limpio y puede utilizarse dentro de la economía de la ciudad.' },
  { pt: 'Produção', en: 'Production', es: 'Producción' },
  { pt: 'Conversão (Dinheiro Sujo)', en: 'Dirty Money Conversion', es: 'Conversión a Dinero Sucio' },
  { pt: 'Lavagem', en: 'Laundering', es: 'Lavado' },
  { pt: 'Dinheiro Limpo', en: 'Clean Money', es: 'Dinero Limpio' },

  // Full coverage requested for commercial, powers, commands, binds and affiliates.
  { pt: 'REGRA PRINCIPAL DO COMERCIAL', en: 'Main Commercial Rule', es: 'Regla Principal del Comercial' },
  { pt: 'Nenhum vendedor é dono de cliente!', en: 'No seller owns a client!', es: '¡Ningún vendedor es dueño de un cliente!' },
  { pt: 'Nenhum vendedor é dono de cliente.', en: 'No seller owns a client.', es: 'Ningún vendedor es dueño de un cliente.' },
  { pt: 'A escolha é sempre do cliente: ele compra com quem quiser e com quem se sentir mais confortável.', en: 'The choice always belongs to the client: they buy from whoever they want and whoever makes them feel most comfortable.', es: 'La elección siempre es del cliente: compra con quien quiera y con quien se sienta más cómodo.' },
  { pt: 'Se ele já tiver preferência por algum vendedor, o próprio cliente vai avisar quando oferecerem o produto.', en: 'If they already prefer a seller, the client will say so themselves when someone offers the product.', es: 'Si ya tiene preferencia por algún vendedor, el propio cliente lo dirá cuando le ofrezcan el producto.' },
  { pt: 'Não existe cliente de ninguém.', en: 'No client belongs to anyone.', es: 'No existe cliente de nadie.' },
  { pt: 'O cliente compra com quem ele quiser, com quem ele se sente mais confortável.', en: 'The client buys from whoever they want, from whoever makes them feel most comfortable.', es: 'El cliente compra con quien quiera, con quien se sienta más cómodo.' },
  { pt: 'Se o cliente já tiver preferência por um vendedor, ele mesmo vai dizer quando oferecerem o produto que já compra com o vendedor X.', en: 'If the client already prefers a seller, they will say so themselves when someone offers a product they already buy from seller X.', es: 'Si el cliente ya tiene preferencia por un vendedor, él mismo lo dirá cuando le ofrezcan un producto que ya compra con el vendedor X.' },
  { pt: 'REGRAS IMPORTANTES', en: 'Important Rules', es: 'Reglas Importantes' },
  { pt: 'OPERAÇÃO', en: 'Operations', es: 'Operación' },
  { pt: 'DIRETRIZES E DIRECIONAMENTOS', en: 'Guidelines and Directions', es: 'Directrices y Orientaciones' },
  { pt: 'Comercial Interfere em banimentos?', en: 'Does Commercial interfere with bans?', es: '¿Comercial interfiere en baneos?' },
  { pt: 'O comercial não possui autoridade para alterar, revisar ou opinar sobre decisões da operação.', en: 'Commercial does not have authority to change, review, or comment on Operations decisions.', es: 'Comercial no tiene autoridad para cambiar, revisar u opinar sobre decisiones de Operación.' },
  { pt: 'Comercial negocia punições de banimentos e advertências?', en: 'Does Commercial negotiate ban and warning punishments?', es: '¿Comercial negocia sanciones de baneos y advertencias?' },
  { pt: 'Nenhuma punição pode ser flexibilizada, negociada ou “ajustada” pelo comercial.', en: 'No punishment may be relaxed, negotiated, or “adjusted” by Commercial.', es: 'Ninguna sanción puede flexibilizarse, negociarse o “ajustarse” por Comercial.' },
  { pt: 'Quem pode resolver essas questões de banimentos e advertências?', en: 'Who can resolve these ban and warning issues?', es: '¿Quién puede resolver estos asuntos de baneos y advertencias?' },
  { pt: 'Toda situação envolvendo punição ou advertência é responsabilidade da equipe operacional.', en: 'Every situation involving a punishment or warning is the responsibility of the Operations team.', es: 'Toda situación relacionada con sanciones o advertencias es responsabilidad del equipo de Operación.' },
  { pt: 'Cliente foi banido ou advertido sem que seja pelo Comercial?', en: 'Was the client banned or warned by someone outside Commercial?', es: '¿El cliente fue baneado o advertido sin que fuera por Comercial?' },
  { pt: 'Em caso de banimentos ou advertências que não forem por motivos comerciais, encaminhar o cliente a procurar alguém da operação.', en: 'For bans or warnings that are not for commercial reasons, direct the client to someone from Operations.', es: 'En casos de baneos o advertencias que no sean por motivos comerciales, dirige al cliente a alguien de Operación.' },
  { pt: 'Cliente com problema com um staff?', en: 'Client having an issue with a staff member?', es: '¿Cliente con problema con un staff?' },
  { pt: 'O cliente tem algum problema com algum staff da operação? Encaminhe o cliente para alguém da Diretoria da cidade.', en: 'If the client has an issue with someone from Operations staff, direct the client to someone from City Management.', es: 'Si el cliente tiene algún problema con un staff de Operación, dirígelo a alguien de la Dirección de la ciudad.' },
  { pt: 'Cliente possui dúvidas referente a um produto, vip ou gostaria de efetuar uma compra?', en: 'Does the client have questions about a product, VIP, or want to make a purchase?', es: '¿El cliente tiene dudas sobre un producto, VIP o quiere realizar una compra?' },
  { pt: 'O comercial é responsável por essa área. Então apenas o comercial pode falar preço de Item, ou tirar dúvidas relacionadas a compra.', en: 'Commercial is responsible for this area. Only Commercial may discuss item prices or answer purchase-related questions.', es: 'Comercial es responsable de esta área. Por eso solo Comercial puede hablar sobre precios de ítems o resolver dudas relacionadas con compras.' },
  { pt: 'RESP. GERAL', en: 'GENERAL LEAD', es: 'RESP. GENERAL' },
  { pt: 'DONO DA CIDADE', en: 'CITY OWNER', es: 'DUEÑO DE LA CIUDAD' },
  { pt: 'Máxima autoridade da cidade. Responsável por definir diretrizes gerais e ter a palavra final.', en: 'Highest authority in the city. Responsible for setting general guidelines and having the final word.', es: 'Máxima autoridad de la ciudad. Responsable de definir directrices generales y tener la palabra final.' },
  { pt: 'DIRETORIA', en: 'MANAGEMENT', es: 'DIRECCIÓN' },
  { pt: 'FISCALIZAÇÃO GERAL', en: 'GENERAL OVERSIGHT', es: 'SUPERVISIÓN GENERAL' },
  { pt: 'Fiscaliza todas as áreas da cidade: cultura, wallstreet e orgs. Toma decisões críticas.', en: 'Oversees every area of the city: culture, Wallstreet, and orgs. Makes critical decisions.', es: 'Supervisa todas las áreas de la ciudad: cultura, Wallstreet y orgs. Toma decisiones críticas.' },
  { pt: 'DIRETOR ORGS & LEGAL', en: 'ORGS & LEGAL DIRECTOR', es: 'DIRECTOR ORGS & LEGAL' },
  { pt: 'EQUILÍBRIO DE PAINÉIS', en: 'PANEL BALANCE', es: 'EQUILIBRIO DE PANELES' },
  { pt: 'Mantém a cultura interna das facções e ilegal/legal em harmonia.', en: 'Keeps the internal culture of factions and illegal/legal areas in harmony.', es: 'Mantiene la cultura interna de facciones y áreas ilegal/legal en armonía.' },
  { pt: 'DIRETOR COMUNIDADE', en: 'COMMUNITY DIRECTOR', es: 'DIRECTOR DE COMUNIDAD' },
  { pt: 'CULTURA E SUPORTE', en: 'CULTURE AND SUPPORT', es: 'CULTURA Y SOPORTE' },
  { pt: 'Mantém as pastas rodando e o suporte ao player ativo.', en: 'Keeps the departments running and player support active.', es: 'Mantiene las áreas funcionando y el soporte al jugador activo.' },
  { pt: 'DIRETOR WALLSTREET', en: 'WALLSTREET DIRECTOR', es: 'DIRECTOR WALLSTREET' },
  { pt: 'RECRUTAMENTO E INICIANTES', en: 'RECRUITMENT AND BEGINNERS', es: 'RECLUTAMIENTO Y PRINCIPIANTES' },
  { pt: 'Gestão de iniciantes e direcionamento para facções ou empregos.', en: 'Management of beginners and guidance toward factions or jobs.', es: 'Gestión de principiantes y orientación hacia facciones o trabajos.' },
  { pt: 'O respeito à hierarquia evita erros e mantém a ordem estratégica da cidade.', en: 'Respect for hierarchy prevents mistakes and keeps the city strategically organized.', es: 'El respeto a la jerarquía evita errores y mantiene el orden estratégico de la ciudad.' },

  { pt: 'Abaixo estão quais os principais comandos utilizados dentro da cidade. Para utilizá-los basta clicar no "F8" e escrever o comando.', en: 'Below are the main commands used inside the city. To use them, click "F8" and type the command.', es: 'Abajo están los principales comandos utilizados dentro de la ciudad. Para usarlos, pulsa "F8" y escribe el comando.' },
  { pt: 'Abaixo estão quais os principais comandos utilizados dentro da cidade. Para utilizá-los basta clicar no', en: 'Below are the main commands used inside the city. To use them, click', es: 'Abajo están los principales comandos utilizados dentro de la ciudad. Para usarlos, pulsa' },
  { pt: 'e escrever o comando.', en: 'and type the command.', es: 'y escribe el comando.' },
  { pt: 'ATENÇÃO: É extremamente proibido utilizar os poderes para benefício próprio ou prejudicar alguém. Enquadra como ABUSO DE PODER.', en: 'WARNING: It is strictly forbidden to use powers for personal benefit or to harm someone. This is considered POWER ABUSE.', es: 'ATENCIÓN: Está estrictamente prohibido usar los poderes para beneficio propio o para perjudicar a alguien. Se considera ABUSO DE PODER.' },
  { pt: 'Abaixo estão quais os comandos mais utilizados pelo comercial, dentro e fora de atendimento ao cliente.', en: 'Below are the commands most used by Commercial, both during and outside client service.', es: 'Abajo están los comandos más utilizados por Comercial, dentro y fuera de la atención al cliente.' },
  { pt: 'Reviver', en: 'Revive', es: 'Revivir' },
  { pt: 'Revive o jogador pelo ID', en: 'Revives the player by ID', es: 'Revive al jugador por ID' },
  { pt: 'Suporte emergencial', en: 'Emergency support', es: 'Soporte de emergencia' },
  { pt: 'Restaura vida e fome', en: 'Restores health and hunger', es: 'Restaura vida y hambre' },
  { pt: 'Tele-Revive', en: 'Tele-Revive', es: 'Tele-Revivir' },
  { pt: 'Revive e envia para local', en: 'Revives and sends to a location', es: 'Revive y envía a un lugar' },
  { pt: 'Locais: Pier/DP/PN/HP', en: 'Locations: Pier/DP/PN/HP', es: 'Lugares: Pier/DP/PN/HP' },
  { pt: 'Ficar invisível e voar', en: 'Become invisible and fly', es: 'Volverse invisible y volar' },
  { pt: 'Buscar ou supervisionar alguém', en: 'Search for or supervise someone', es: 'Buscar o supervisar a alguien' },
  { pt: 'Atravessa qualquer superfície', en: 'Goes through any surface', es: 'Atraviesa cualquier superficie' },
  { pt: 'Ir até', en: 'Go To', es: 'Ir Hasta' },
  { pt: 'Teleporta até o jogador', en: 'Teleports to the player', es: 'Teletransporta hasta el jugador' },
  { pt: 'Ir até alguém que lhe chamou ou que precisa prestar um serviço', en: 'Go to someone who called you or needs service', es: 'Ir hasta alguien que te llamó o necesita un servicio' },
  { pt: 'Locomoção instantânea', en: 'Instant movement', es: 'Desplazamiento instantáneo' },
  { pt: 'Trazer', en: 'Bring', es: 'Traer' },
  { pt: 'Puxar jogador até você', en: 'Pull a player to you', es: 'Traer un jugador hacia ti' },
  { pt: 'Prestar ajuda a alguém ou puxar o cliente para prestar um serviço à ele', en: 'Help someone or bring the client to provide service to them', es: 'Ayudar a alguien o traer al cliente para prestarle un servicio' },
  { pt: 'Puxa o player', en: 'Pulls the player', es: 'Trae al player' },
  { pt: 'Vai até o marcador do mapa', en: 'Goes to the map marker', es: 'Va hasta el marcador del mapa' },
  { pt: 'Locomoção', en: 'Movement', es: 'Desplazamiento' },
  { pt: 'Teleporte por GPS', en: 'GPS teleport', es: 'Teletransporte por GPS' },
  { pt: 'Advertência', en: 'Warning', es: 'Advertencia' },
  { pt: 'Envia para a ilha (punição)', en: 'Sends to the island (punishment)', es: 'Envía a la isla (sanción)' },
  { pt: 'Aplica uma punição à um jogador (não pode utilizar de forma errada)', en: 'Applies a punishment to a player (must not be used incorrectly)', es: 'Aplica una sanción a un jugador (no puede usarse de forma incorrecta)' },
  { pt: 'Prisão administrativa', en: 'Administrative jail', es: 'Prisión administrativa' },
  { pt: 'Limpar Área', en: 'Clear Area', es: 'Limpiar Área' },
  { pt: 'Remove veículos num raio de 10m', en: 'Removes vehicles within a 10m radius', es: 'Elimina vehículos en un radio de 10m' },
  { pt: 'Limpeza', en: 'Cleanup', es: 'Limpieza' },
  { pt: 'Evita lag por carros', en: 'Prevents car-related lag', es: 'Evita lag por vehículos' },
  { pt: 'Permissões', en: 'Permissions', es: 'Permisos' },
  { pt: 'Verifica grupos do player', en: 'Checks the player groups', es: 'Verifica los grupos del player' },
  { pt: 'Verificação de quais vips a pessoa tem ou cargos em facção/organização', en: 'Checks which VIPs the person has or their faction/organization roles', es: 'Verificación de qué VIPs tiene la persona o cargos en facción/organización' },
  { pt: 'Checa poder de admin', en: 'Checks admin power', es: 'Verifica poder de admin' },
  { pt: 'Banir', en: 'Ban', es: 'Banear' },
  { pt: 'Bane o jogador', en: 'Bans the player', es: 'Banea al jugador' },
  { pt: 'Aplicar uma punição à um jogador (permitido apenas o uso do ban comercial em casos comerciais, não utiliza-lo de forma errada)', en: 'Apply a punishment to a player (commercial ban is allowed only for commercial cases; do not use it incorrectly)', es: 'Aplicar una sanción a un jugador (el ban comercial solo está permitido en casos comerciales; no usarlo de forma incorrecta)' },
  { pt: 'Remove acesso permanente', en: 'Removes access permanently', es: 'Elimina el acceso de forma permanente' },
  { pt: 'Expulsar', en: 'Kick', es: 'Expulsar' },
  { pt: 'Kicka o jogador', en: 'Kicks the player', es: 'Expulsa al jugador' },
  { pt: 'Retira o jogador da cidade', en: 'Removes the player from the city', es: 'Retira al jugador de la ciudad' },
  { pt: 'Desconexão forçada', en: 'Forced disconnection', es: 'Desconexión forzada' },
  { pt: 'Resetar Ambiente', en: 'Reset Environment', es: 'Reiniciar Ambiente' },
  { pt: 'Limpa marcas e objetos', en: 'Clears marks and objects', es: 'Limpia marcas y objetos' },
  { pt: 'Faz com que objetos ao redor sumam', en: 'Makes nearby objects disappear', es: 'Hace que desaparezcan los objetos cercanos' },
  { pt: 'Restaura a cena', en: 'Restores the scene', es: 'Restaura la escena' },
  { pt: 'Mundo', en: 'World', es: 'Mundo' },
  { pt: 'Acessar diferentes mundos/instâncias', en: 'Access different worlds/instances', es: 'Acceder a diferentes mundos/instancias' },
  { pt: 'Mudar para instâncias privadas (Guerra, Evento, etc)', en: 'Move to private instances (War, Event, etc.)', es: 'Cambiar a instancias privadas (Guerra, Evento, etc.)' },
  { pt: 'Ex: guerra, evento, afiliado, primária...', en: 'Ex: war, event, affiliate, primary...', es: 'Ej: guerra, evento, afiliado, primaria...' },
  { pt: 'mundo Afiliado', en: 'world Affiliate', es: 'mundo Afiliado' },
  { pt: 'mundoarea', en: 'worldarea', es: 'mundoarea' },
  { pt: 'mundoarea 5', en: 'worldarea 5', es: 'mundoarea 5' },
  { pt: 'Instância', en: 'Instance', es: 'Instancia' },
  { pt: 'Criar mundo separado', en: 'Create a separate world', es: 'Crear un mundo separado' },
  { pt: 'Levar jogador à um mundo privado sem intervenções do mundo padrão', en: 'Take a player to a private world without interference from the default world', es: 'Llevar a un jugador a un mundo privado sin intervenciones del mundo estándar' },
  { pt: 'Isola os players', en: 'Isolates players', es: 'Aísla a los players' },
  { pt: 'Spawn Carro', en: 'Spawn Car', es: 'Spawnear Auto' },
  { pt: 'Spawna um veículo', en: 'Spawns a vehicle', es: 'Spawnea un vehículo' },
  { pt: 'Puxar veículos para um cliente testar', en: 'Spawn vehicles for a client to test', es: 'Traer vehículos para que un cliente pruebe' },
  { pt: 'Spawna um veículo no local que executou o comando.', en: 'Spawns a vehicle where the command was executed.', es: 'Spawnea un vehículo en el lugar donde se ejecutó el comando.' },
  { pt: 'Consertar o veículo quebrado', en: 'Repair the broken vehicle', es: 'Reparar el vehículo dañado' },
  { pt: 'Veículo com motor ou lataria danificada', en: 'Vehicle with engine or body damage', es: 'Vehículo con motor o carrocería dañada' },
  { pt: 'Restaura a integridade do carro', en: 'Restores the car condition', es: 'Restaura la integridad del auto' },
  { pt: 'Guardar Veículo', en: 'Store Vehicle', es: 'Guardar Vehículo' },
  { pt: 'Guardar veículos spawnados.', en: 'Store spawned vehicles.', es: 'Guardar vehículos spawneados.' },
  { pt: 'Guarda veículos após spawnar para teste', en: 'Stores vehicles after spawning them for testing', es: 'Guarda vehículos después de spawnearlos para prueba' },
  { pt: 'Remove o veículo à frente', en: 'Removes the vehicle in front', es: 'Elimina el vehículo de adelante' },
  { pt: 'Tuna o carro no máximo', en: 'Fully tunes the car', es: 'Tunea el auto al máximo' },
  { pt: 'Aumenta todo o desempenho do veículo', en: 'Maximizes the vehicle performance', es: 'Aumenta todo el rendimiento del vehículo' },
  { pt: 'Performance máxima', en: 'Maximum performance', es: 'Rendimiento máximo' },
  { pt: 'Editar Veículo', en: 'Edit Vehicle', es: 'Editar Vehículo' },
  { pt: 'Abre menu de mecânica', en: 'Opens the mechanic menu', es: 'Abre el menú de mecánica' },
  { pt: 'Tuna o veículo de forma manual (gasta dinheiro do jogo)', en: 'Manually tunes the vehicle (spends in-game money)', es: 'Tunea el vehículo de forma manual (gasta dinero del juego)' },
  { pt: 'Customização profunda', en: 'Deep customization', es: 'Personalización avanzada' },
  { pt: 'Ver informações dos players por cima da cabeça', en: 'View player information above their heads', es: 'Ver información de los players encima de la cabeza' },
  { pt: 'Administração e suporte', en: 'Administration and support', es: 'Administración y soporte' },
  { pt: 'Exibe ID, Vida e Colete', en: 'Shows ID, Health, and Armor', es: 'Muestra ID, Vida y Chaleco' },
  { pt: 'Configurar informações do Wall', en: 'Configure Wall information', es: 'Configurar información del Wall' },
  { pt: 'Ajuste de visão administrativa', en: 'Administrative view adjustment', es: 'Ajuste de visión administrativa' },
  { pt: 'Termos: Source (ID temporário) | Passaporte (ID permanente)', en: 'Terms: Source (temporary ID) | Passport (permanent ID)', es: 'Términos: Source (ID temporal) | Pasaporte (ID permanente)' },

  { pt: 'Binds Essenciais (Vendedor)', en: 'Essential Binds (Seller)', es: 'Binds Esenciales (Vendedor)' },
  { pt: '1. Passo', en: 'Step 1', es: 'Paso 1' },
  { pt: '2. Passo', en: 'Step 2', es: 'Paso 2' },
  { pt: '3. Passo', en: 'Step 3', es: 'Paso 3' },
  { pt: 'NC (modo invisível)', en: 'NC (invisible mode)', es: 'NC (modo invisible)' },
  { pt: 'GOD (reviver)', en: 'GOD (revive)', es: 'GOD (revivir)' },
  { pt: 'WALL (informações do player)', en: 'WALL (player information)', es: 'WALL (información del player)' },
  { pt: 'FIX (consertar veículo)', en: 'FIX (repair vehicle)', es: 'FIX (reparar vehículo)' },
  { pt: 'DV (deletar veículo)', en: 'DV (delete vehicle)', es: 'DV (eliminar vehículo)' },
  { pt: 'Use para observação e posicionamento', en: 'Use for observation and positioning', es: 'Úsalo para observación y posicionamiento' },
  { pt: 'Use para suporte rápido ao player', en: 'Use for quick player support', es: 'Úsalo para soporte rápido al player' },
  { pt: 'Use para análise rápida do cliente', en: 'Use for quick client analysis', es: 'Úsalo para análisis rápido del cliente' },
  { pt: 'Use para ajudar o cliente rapidamente', en: 'Use to help the client quickly', es: 'Úsalo para ayudar rápidamente al cliente' },
  { pt: 'Use para limpar área ou remover veículo bugado', en: 'Use to clear an area or remove a bugged vehicle', es: 'Úsalo para limpiar un área o retirar un vehículo bugueado' },
  { pt: 'As binds utilizadas nos exemplos foram configuradas no teclado numérico (lado direito do teclado).', en: 'The binds used in the examples were configured on the numeric keypad (right side of the keyboard).', es: 'Las binds utilizadas en los ejemplos fueron configuradas en el teclado numérico (lado derecho del teclado).' },
  { pt: 'As binds utilizadas nos exemplos foram configuradas no', en: 'The binds used in the examples were configured on the', es: 'Las binds utilizadas en los ejemplos fueron configuradas en el' },
  { pt: 'teclado numérico (lado direito do teclado)', en: 'numeric keypad (right side of the keyboard)', es: 'teclado numérico (lado derecho del teclado)' },
  { pt: 'Porém, você pode usar qualquer tecla, como:', en: 'However, you can use any key, such as:', es: 'Sin embargo, puedes usar cualquier tecla, como:' },
  { pt: 'Letras', en: 'Letters', es: 'Letras' },
  { pt: 'Números', en: 'Numbers', es: 'Números' },
  { pt: 'Teclas F (F1, F2, F3...)', en: 'F keys (F1, F2, F3...)', es: 'Teclas F (F1, F2, F3...)' },
  { pt: 'MENTALIDADE', en: 'Mindset', es: 'Mentalidad' },
  { pt: '“agilidade no comando = mais eficiência no atendimento” ⚡', en: '“speed with commands = more efficient service” ⚡', es: '“agilidad con los comandos = más eficiencia en la atención” ⚡' },

  { pt: 'Parceria e Crescimento', en: 'Partnership and Growth', es: 'Alianza y Crecimiento' },
  { pt: 'O programa de afiliados do SantaGroup é a porta de entrada para quem busca profissionalismo e resultados reais dentro da cidade.', en: 'The SantaGroup affiliate program is the gateway for those seeking professionalism and real results inside the city.', es: 'El programa de afiliados de SantaGroup es la puerta de entrada para quienes buscan profesionalismo y resultados reales dentro de la ciudad.' },
  { pt: 'SEÇÃO 1 — AFILIADOS (FORMAÇÃO)', en: 'SECTION 1 — AFFILIATES (TRAINING)', es: 'SECCIÓN 1 — AFILIADOS (FORMACIÓN)' },
  { pt: 'O QUE É AFILIADO?', en: 'WHAT IS AN AFFILIATE?', es: '¿QUÉ ES UN AFILIADO?' },
  { pt: '"Um Afiliado é parte de uma equipe onde um Responsável de Vendas lidera, estrutura e desenvolve pessoas que realizam vendas dentro da cidade."', en: '"An Affiliate is part of a team where a Sales Lead guides, structures, and develops people who make sales inside the city."', es: '"Un Afiliado forma parte de un equipo donde un Responsable de Ventas lidera, estructura y desarrolla a personas que realizan ventas dentro de la ciudad."' },
  { pt: 'O QUE É SER UM AFILIADO?', en: 'WHAT DOES IT MEAN TO BE AN AFFILIATE?', es: '¿QUÉ ES SER UN AFILIADO?' },
  { pt: '"Ser afiliado é buscar evolução constante.', en: '"Being an affiliate means seeking constant growth.', es: '"Ser afiliado es buscar evolución constante.' },
  { pt: 'É aprender, aplicar e crescer todos os dias.', en: 'It means learning, applying, and growing every day.', es: 'Es aprender, aplicar y crecer todos los días.' },
  { pt: 'É o primeiro passo para entrar no Comercial SantaGroup.', en: 'It is the first step toward joining SantaGroup Commercial.', es: 'Es el primer paso para entrar en Comercial SantaGroup.' },
  { pt: 'Quem entra com visão, cresce. Quem cresce, domina."', en: 'Those who enter with vision grow. Those who grow, dominate."', es: 'Quien entra con visión, crece. Quien crece, domina."' },
  { pt: 'ERROS MAIS COMUNS (INÍCIO)', en: 'Most Common Mistakes (Start)', es: 'Errores Más Comunes (Inicio)' },
  { pt: '"O maior erro de um afiliado no início é o mal uso dos poderes."', en: '"The biggest mistake an affiliate makes at the beginning is misusing powers."', es: '"El mayor error de un afiliado al inicio es el mal uso de los poderes."' },
  { pt: 'Sair do NC exposto', en: 'Leaving NC exposed', es: 'Salir del NC expuesto' },
  { pt: 'Usar poderes em RP', en: 'Using powers in RP', es: 'Usar poderes en RP' },
  { pt: 'Spawn incorreto de veículos', en: 'Incorrect vehicle spawn', es: 'Spawn incorrecto de vehículos' },
  { pt: 'Troca de mundo indevida', en: 'Improper world change', es: 'Cambio de mundo indebido' },
  { pt: 'Puxar cliente sem contexto', en: 'Pulling a client without context', es: 'Traer a un cliente sin contexto' },
  { pt: 'Tunar sem necessidade', en: 'Tuning without need', es: 'Tunear sin necesidad' },
  { pt: '"Afiliado preparado não erra em momentos importantes."', en: '"A prepared affiliate does not make mistakes in important moments."', es: '"Un afiliado preparado no se equivoca en momentos importantes."' },
  { pt: 'REGRAS PRINCIPAIS', en: 'Main Rules', es: 'Reglas Principales' },
  { pt: 'Não abusar de poder', en: 'Do not abuse power', es: 'No abusar del poder' },
  { pt: 'Priorizar bater meta antes de RP', en: 'Prioritize hitting targets before RP', es: 'Priorizar cumplir la meta antes del RP' },
  { pt: 'Nunca alterar preços da tabela', en: 'Never change table prices', es: 'Nunca alterar precios de la tabla' },
  { pt: 'Manter respeito entre equipes', en: 'Maintain respect between teams', es: 'Mantener respeto entre equipos' },
  { pt: 'META E RESPONSABILIDADE', en: 'Target and Responsibility', es: 'Meta y Responsabilidad' },
  { pt: 'Foco total em performance e compromisso.', en: 'Full focus on performance and commitment.', es: 'Enfoque total en rendimiento y compromiso.' },
  { pt: '"Todo afiliado tem uma meta diária a ser cumprida. Essa meta pode variar de acordo com a cidade, mas sempre existirá."', en: '"Every affiliate has a daily target to meet. This target may vary depending on the city, but it will always exist."', es: '"Todo afiliado tiene una meta diaria que cumplir. Esa meta puede variar según la ciudad, pero siempre existirá."' },
  { pt: 'REGRA CRÍTICA:', en: 'Critical Rule:', es: 'Regla Crítica:' },
  { pt: 'Remoção imediata da equipe', en: 'Immediate removal from the team', es: 'Remoción inmediata del equipo' },
  { pt: 'Blacklist permanente de AFILIADOS', en: 'Permanent AFFILIATES blacklist', es: 'Blacklist permanente de AFILIADOS' },
  { pt: 'Aplicado após 3 dias sem meta.', en: 'Applied after 3 days without hitting the target.', es: 'Aplicado después de 3 días sin cumplir la meta.' },
  { pt: 'EXPLICAÇÃO:', en: 'Explanation:', es: 'Explicación:' },
  { pt: 'EXPLICAÇÃO', en: 'Explanation', es: 'Explicación' },
  { pt: '"Se alguém que tem acesso a um sistema onde pode conquistar mais do que muitos cargos dentro da cidade não se dedica… Não é depois que vai querer. Aqui, oportunidade é pra quem valoriza."', en: '"If someone with access to a system where they can achieve more than many roles inside the city does not commit... they cannot want it later. Here, opportunity is for those who value it."', es: '"Si alguien que tiene acceso a un sistema donde puede lograr más que muchos cargos dentro de la ciudad no se dedica... no es después que va a querer. Aquí, la oportunidad es para quien la valora."' },
  { pt: 'EVOLUÇÃO DE CARGO', en: 'Role Progression', es: 'Evolución de Cargo' },
  { pt: '"Não é qualquer um que sobe. Só cresce quem prova que é capaz."', en: '"Not everyone moves up. Only those who prove they are capable grow."', es: '"No cualquiera asciende. Solo crece quien demuestra que es capaz."' },
  { pt: 'Critérios de Ascensão', en: 'Promotion Criteria', es: 'Criterios de Ascenso' },
  { pt: 'Apenas afiliados esforçados tem capacidade de conquistar esses cargos', en: 'Only hardworking affiliates are capable of earning these roles', es: 'Solo los afiliados esforzados tienen capacidad de conquistar estos cargos' },
  { pt: 'Precisa bater metas constantemente', en: 'Must consistently hit targets', es: 'Debe cumplir metas constantemente' },
  { pt: 'Precisa ter alto volume de vendas', en: 'Must have high sales volume', es: 'Debe tener alto volumen de ventas' },
  { pt: 'Precisa saber liderar e estruturar equipe', en: 'Must know how to lead and structure a team', es: 'Debe saber liderar y estructurar equipo' },
  { pt: 'Hierarquia dos maiores cargos de Afiliados', en: 'Hierarchy of the Highest Affiliate Roles', es: 'Jerarquía de los Mayores Cargos de Afiliados' },
  { pt: 'Responsável', en: 'Lead', es: 'Responsable' },
  { pt: 'Cargo não é dado. É conquistado.', en: 'A role is not given. It is earned.', es: 'El cargo no se regala. Se conquista.' },
  { pt: 'CULTURA', en: 'Culture', es: 'Cultura' },
  { pt: '"É o que você faz certo mesmo quando ninguém está olhando."', en: '"It is what you do right even when no one is watching."', es: '"Es lo que haces bien incluso cuando nadie está mirando."' },
  { pt: 'Exemplo de Ambiente', en: 'Environment Example', es: 'Ejemplo de Ambiente' },
  { pt: 'Balada:', en: 'Club:', es: 'Fiesta:' },
  { pt: 'Grito, dança, bagunça', en: 'Shouting, dancing, mess', es: 'Gritos, baile, desorden' },
  { pt: 'Teatro:', en: 'Theater:', es: 'Teatro:' },
  { pt: 'Silêncio, respeito', en: 'Silence, respect', es: 'Silencio, respeto' },
  { pt: '"Você não precisa que alguém mande. Você já sabe como agir."', en: '"You do not need someone to tell you. You already know how to act."', es: '"No necesitas que alguien te lo ordene. Ya sabes cómo actuar."' },
  { pt: 'SEÇÃO 2 — RECRUTAMENTO', en: 'SECTION 2 — RECRUITMENT', es: 'SECCIÓN 2 — RECLUTAMIENTO' },
  { pt: 'ENTREVISTA', en: 'Interview', es: 'Entrevista' },
  { pt: 'Idade', en: 'Age', es: 'Edad' },
  { pt: 'Experiência como staff', en: 'Staff experience', es: 'Experiencia como staff' },
  { pt: 'Disponibilidade', en: 'Availability', es: 'Disponibilidad' },
  { pt: 'Motivo para entrar', en: 'Reason for joining', es: 'Motivo para entrar' },
  { pt: 'Planos futuros', en: 'Future plans', es: 'Planes futuros' },
  { pt: 'VENDA DO SONHO', en: 'Selling the Dream', es: 'Venta del Sueño' },
  { pt: '"Ser afiliado é o começo de uma oportunidade real dentro do SantaGroup. Quem performa, cresce. Quem cresce, entra no comercial."', en: '"Being an affiliate is the beginning of a real opportunity inside SantaGroup. Those who perform, grow. Those who grow, enter Commercial."', es: '"Ser afiliado es el comienzo de una oportunidad real dentro de SantaGroup. Quien rinde, crece. Quien crece, entra en Comercial."' },
  { pt: 'Explicar poderes', en: 'Explain powers', es: 'Explicar poderes' },
  { pt: 'Explicar preços', en: 'Explain prices', es: 'Explicar precios' },
  { pt: 'Mostrar tabela da cidade', en: 'Show the city table', es: 'Mostrar tabla de la ciudad' },
  { pt: 'Explicar funcionamento da loja', en: 'Explain how the store works', es: 'Explicar funcionamiento de la tienda' },
  { pt: 'Alinhar padrão de preços', en: 'Align the pricing standard', es: 'Alinear estándar de precios' },
  { pt: 'FINALIZAÇÃO', en: 'Completion', es: 'Finalización' },
  { pt: 'Setar no Discord de poderes', en: 'Set up in the powers Discord', es: 'Setear en el Discord de poderes' },
  { pt: 'Setar no Discord de afiliados', en: 'Set up in the affiliates Discord', es: 'Setear en el Discord de afiliados' },
  { pt: 'Confirmar acesso', en: 'Confirm access', es: 'Confirmar acceso' },
  { pt: 'SETAGEM DE PODERES', en: 'Power Setup', es: 'Seteo de Poderes' },
  { pt: 'Discord de Afiliados (Poderes)', en: 'Affiliates Discord (Powers)', es: 'Discord de Afiliados (Poderes)' },
  { pt: 'Solicitação dos poderes', en: 'Power request', es: 'Solicitud de poderes' },
  { pt: 'Setagem manual de poderes (/setcargo)', en: 'Manual power setup (/setcargo)', es: 'Seteo manual de poderes (/setcargo)' },
  { pt: 'Verificação dos poderes', en: 'Power verification', es: 'Verificación de poderes' },
  { pt: '1. Discord de Afiliados (Poderes)', en: '1. Affiliates Discord (Powers)', es: '1. Discord de Afiliados (Poderes)' },
  { pt: '2. Solicitação dos poderes', en: '2. Power request', es: '2. Solicitud de poderes' },
  { pt: '3. Setagem manual de poderes (/setcargo)', en: '3. Manual power setup (/setcargo)', es: '3. Seteo manual de poderes (/setcargo)' },
  { pt: '4. Verificação dos poderes', en: '4. Power verification', es: '4. Verificación de poderes' },
  { pt: 'Ver Exemplo', en: 'View Example', es: 'Ver Ejemplo' },
  { pt: 'Ver Print', en: 'View Screenshot', es: 'Ver Captura' },

  { pt: 'Afiliados SantaGroup', en: 'SantaGroup Affiliates', es: 'Afiliados SantaGroup' },
  { pt: 'Entenda como funciona o cashback, onde ele pode ser usado e quais regras precisam ser respeitadas dentro da equipe de afiliados.', en: 'Understand how cashback works, where it can be used, and which rules must be respected inside the affiliate team.', es: 'Entiende cómo funciona el cashback, dónde puede usarse y qué reglas deben respetarse dentro del equipo de afiliados.' },
  { pt: 'Cashback por venda', en: 'Cashback per Sale', es: 'Cashback por Venta' },
  { pt: 'Todo afiliado recebe uma porcentagem sobre cada venda realizada, normalmente entre 7% e 12%, conforme cargo e regras da cidade.', en: 'Every affiliate receives a percentage of each completed sale, usually between 7% and 12%, depending on role and city rules.', es: 'Todo afiliado recibe un porcentaje por cada venta realizada, normalmente entre 7% y 12%, según cargo y reglas de la ciudad.' },
  { pt: 'Crédito interno', en: 'Internal Credit', es: 'Crédito Interno' },
  { pt: 'O cashback funciona como um crédito dentro da cidade e pode ser utilizado apenas para benefício próprio.', en: 'Cashback works as credit inside the city and may only be used for personal benefit.', es: 'El cashback funciona como un crédito dentro de la ciudad y solo puede usarse para beneficio propio.' },
  { pt: 'Uso pessoal', en: 'Personal Use', es: 'Uso Personal' },
  { pt: 'Pode ser usado em itens pessoais como roupas, VIPs, blindados e outros benefícios disponíveis na nossa loja vip.', en: 'It can be used on personal items such as clothes, VIPs, armored vehicles, and other benefits available in our VIP store.', es: 'Puede usarse en artículos personales como ropa, VIPs, blindados y otros beneficios disponibles en nuestra tienda VIP.' },
  { pt: 'QUAIS OS BENEFÍCIOS DE SER UM AFILIADO?', en: 'WHAT ARE THE BENEFITS OF BEING AN AFFILIATE?', es: '¿CUÁLES SON LOS BENEFICIOS DE SER AFILIADO?' },
  { pt: 'USO EXCLUSIVO E PESSOAL', en: 'Exclusive and Personal Use', es: 'Uso Exclusivo y Personal' },
  { pt: 'O cashback é de uso exclusivo e pessoal do afiliado. Ele não pode ser transferido, vendido, emprestado ou utilizado para beneficiar outra pessoa.', en: 'Cashback is for the affiliate’s exclusive and personal use. It cannot be transferred, sold, lent, or used to benefit another person.', es: 'El cashback es de uso exclusivo y personal del afiliado. No puede transferirse, venderse, prestarse ni utilizarse para beneficiar a otra persona.' },
  { pt: 'O QUE É CASHBACK?', en: 'WHAT IS CASHBACK?', es: '¿QUÉ ES CASHBACK?' },
  { pt: 'SAIU DA EQUIPE DE AFILIADOS E AINDA POSSUI CASHBACK?', en: 'LEFT THE AFFILIATE TEAM AND STILL HAVE CASHBACK?', es: '¿SALISTE DEL EQUIPO DE AFILIADOS Y AÚN TIENES CASHBACK?' },
  {
    pt: `## QUAIS OS BENEFÍCIOS DE SER UM AFILIADO?

Todo afiliado, ao realizar uma venda, recebe **cashback sobre o valor vendido**. Esse cashback pode variar de acordo com o cargo dentro da equipe de vendas, normalmente entre **7% e 12%**, podendo ser ajustado conforme decisão do gerente da cidade.

O cashback pode ser usado para adquirir itens pessoais dentro da cidade, como **roupas, VIPs, blindados e outros benefícios disponíveis na nossa loja vip**.`,
    en: `## WHAT ARE THE BENEFITS OF BEING AN AFFILIATE?

Every affiliate, when completing a sale, receives **cashback on the sold amount**. This cashback may vary according to their role within the sales team, usually between **7% and 12%**, and may be adjusted according to the city manager’s decision.

Cashback can be used to purchase personal items inside the city, such as **clothes, VIPs, armored vehicles, and other benefits available in our VIP store**.`,
    es: `## ¿CUÁLES SON LOS BENEFICIOS DE SER AFILIADO?

Todo afiliado, al realizar una venta, recibe **cashback sobre el valor vendido**. Este cashback puede variar según el cargo dentro del equipo de ventas, normalmente entre **7% y 12%**, y puede ajustarse según la decisión del gerente de la ciudad.

El cashback puede usarse para adquirir artículos personales dentro de la ciudad, como **ropa, VIPs, blindados y otros beneficios disponibles en nuestra tienda VIP**.`,
  },
  {
    pt: `## O QUE É CASHBACK?

Cashback é uma porcentagem gerada a partir de uma venda realizada pelo afiliado.

Na prática, funciona como um **crédito interno da cidade**, que pode ser usado apenas para **benefício próprio**.

## SAIU DA EQUIPE DE AFILIADOS E AINDA POSSUI CASHBACK?

O cashback só é válido enquanto o membro estiver ativo como afiliado.

Caso o afiliado seja removido da equipe, saia por conta própria ou deixe de fazer parte do programa antes de utilizar o saldo, o cashback será automaticamente perdido e não poderá ser recuperado.`,
    en: `## WHAT IS CASHBACK?

Cashback is a percentage generated from a sale completed by the affiliate.

In practice, it works as an **internal city credit**, which can only be used for **personal benefit**.

## LEFT THE AFFILIATE TEAM AND STILL HAVE CASHBACK?

Cashback is only valid while the member is active as an affiliate.

If the affiliate is removed from the team, leaves voluntarily, or stops being part of the program before using the balance, the cashback will be automatically lost and cannot be recovered.`,
    es: `## ¿QUÉ ES CASHBACK?

Cashback es un porcentaje generado a partir de una venta realizada por el afiliado.

En la práctica, funciona como un **crédito interno de la ciudad**, que solo puede usarse para **beneficio propio**.

## ¿SALISTE DEL EQUIPO DE AFILIADOS Y AÚN TIENES CASHBACK?

El cashback solo es válido mientras el miembro esté activo como afiliado.

Si el afiliado es removido del equipo, sale por cuenta propia o deja de formar parte del programa antes de utilizar el saldo, el cashback se perderá automáticamente y no podrá recuperarse.`,
  },
  {
    pt: `**Quebrar RP (sair do personagem)** no GTA RP é quando o jogador deixa de agir como o personagem dele e passa a agir como ele mesmo (**vida real — “Nárnia”**).
👉 Ou seja: ele “quebra a imersão” do roleplay.

### 📌 O QUE É “NÁRNIA” NO RP?

No GTA RP, **“Nárnia”** é uma forma informal que os jogadores usam para se referir à **vida real (fora do jogo)**.
👉 É como se fosse um “outro mundo”, separado do RP.

* “Eu trabalho amanhã em Nárnia” → está falando da vida real
* “Isso aconteceu em Nárnia” → algo fora do personagem

### 📌 EXEMPLOS DE QUEBRA DE RP:
* Falar coisas da vida real no meio da cena
* Usar termos como: “isso é só um jogo”, “vou reportar você”
* Reclamar de regras durante uma situação em andamento
* Agir com conhecimento que o personagem não teria (meta)
* Sair do **NC** na frente dos jogadores

### 🎯 RESUMO SIMPLES:
> Quebrar RP é parar de interpretar seu personagem e trazer a “Nárnia” (vida real) pra dentro do jogo.`,
    en: `**Breaking RP (leaving character)** in GTA RP happens when the player stops acting as their character and starts acting as themselves (**real life — “Narnia”**).
👉 In other words: they “break the immersion” of roleplay.

### 📌 WHAT IS “NARNIA” IN RP?

In GTA RP, **“Narnia”** is an informal term players use to refer to **real life (outside the game)**.
👉 It is like an “other world”, separate from RP.

* “I work tomorrow in Narnia” → they are talking about real life
* “That happened in Narnia” → something outside the character

### 📌 EXAMPLES OF BREAKING RP:
* Talking about real-life things in the middle of a scene
* Using terms such as: “this is just a game”, “I’m going to report you”
* Complaining about rules during an ongoing situation
* Acting with knowledge the character would not have (meta)
* Leaving **NC** in front of players

### 🎯 SIMPLE SUMMARY:
> Breaking RP means stopping the interpretation of your character and bringing “Narnia” (real life) into the game.`,
    es: `**Romper RP (salir del personaje)** en GTA RP ocurre cuando el jugador deja de actuar como su personaje y empieza a actuar como él mismo (**vida real — “Narnia”**).
👉 Es decir: “rompe la inmersión” del roleplay.

### 📌 ¿QUÉ ES “NARNIA” EN RP?

En GTA RP, **“Narnia”** es una forma informal que los jugadores usan para referirse a la **vida real (fuera del juego)**.
👉 Es como si fuera “otro mundo”, separado del RP.

* “Trabajo mañana en Narnia” → está hablando de la vida real
* “Eso pasó en Narnia” → algo fuera del personaje

### 📌 EJEMPLOS DE ROMPER RP:
* Hablar de cosas de la vida real en medio de la escena
* Usar términos como: “esto es solo un juego”, “te voy a reportar”
* Quejarse de reglas durante una situación en curso
* Actuar con conocimiento que el personaje no tendría (meta)
* Salir del **NC** delante de los jugadores

### 🎯 RESUMEN SIMPLE:
> Romper RP es dejar de interpretar a tu personaje y traer “Narnia” (vida real) al juego.`,
  },
  {
    pt: `**Abusar de poderes para benefício próprio** no GTA RP é quando alguém do comercial usa comandos ou permissões do servidor para se favorecer dentro do jogo, em vez de usar apenas para administração. 

👉 Ou seja: usa o “poder comercial” como vantagem pessoal, quebrando as regras do servidor.

### 📌 Exemplos:
* Usar **/god**, **/nc**, teleport, etc. para ganhar vantagem em situações RP
* Ajudar amigos (favorecimento) em vez de agir de forma neutra
* Evitar punições próprias ou de conhecidos

### 🎯 Resumo simples:
> Abusar de Poder é usar seus poderes para benefício próprio, e não para vendas`,
    en: `**Abusing powers for personal benefit** in GTA RP happens when someone from Commercial uses server commands or permissions to benefit themselves in-game, instead of using them only for administration.

👉 In other words: they use “commercial power” as a personal advantage, breaking the server rules.

### 📌 Examples:
* Using **/god**, **/nc**, teleport, etc. to gain an advantage in RP situations
* Helping friends (favoritism) instead of acting neutrally
* Avoiding punishments for yourself or acquaintances

### 🎯 Simple summary:
> Power Abuse means using your powers for personal benefit, not for sales`,
    es: `**Abusar de poderes para beneficio propio** en GTA RP ocurre cuando alguien de Comercial usa comandos o permisos del servidor para favorecerse dentro del juego, en lugar de usarlos solo para administración.

👉 Es decir: usa el “poder comercial” como ventaja personal, rompiendo las reglas del servidor.

### 📌 Ejemplos:
* Usar **/god**, **/nc**, teleport, etc. para ganar ventaja en situaciones RP
* Ayudar a amigos (favoritismo) en lugar de actuar de forma neutral
* Evitar sanciones propias o de conocidos

### 🎯 Resumen simple:
> Abusar de Poder es usar tus poderes para beneficio propio, y no para ventas`,
  },

  // ============ WIPE — O que é wipe? ============
  { pt: 'O que é Wipe?', en: 'What is a Wipe?', es: '¿Qué es un Wipe?', aliases: ['O que é wipe?'] },
  {
    pt: 'Entenda o que é um wipe, como o aviso chega e como Comercial e Operação se preparam junto com as facções.',
    en: 'Understand what a wipe is, how the notice arrives and how Commercial and Operations prepare together with the factions.',
    es: 'Entiende qué es un wipe, cómo llega el aviso y cómo Comercial y Operación se preparan junto con las facciones.',
  },
  {
    pt: `## O QUE É WIPE?

Wipe é o **reset da cidade** para o início de uma nova season. Antes que ele aconteça, todo mundo recebe aviso com **3 dias de antecedência**.

O **Comercial e a Operação** ficam sabendo antes para se organizar. Quando o wipe é confirmado, os dois times se juntam para conversar com os líderes.

A maior parte da troca de ideia com as facções fica a cargo da **Operação**, pois eles conhecem melhor os líderes do que nós do Comercial. Nós entramos para tratar da **venda dos itens** que os líderes irão manter ou tenham interesse em adquirir, como:

- 🌾 **Farms**
- 👑 **VIP Facção**
- 👕 **Roupas**
- 🛠️ **Modificações dentro da facção**`,
    en: `## WHAT IS A WIPE?

A wipe is the **city reset** to start a new season. Before it happens, everyone gets a **3-day advance notice**.

The **Commercial and Operations teams** are informed beforehand so they can organize. Once the wipe is confirmed, both teams get together to talk to the leaders.

Most of the conversation with the factions is handled by **Operations**, since they know the leaders better than we do in Commercial. We come in to handle the **sale of items** the leaders want to keep or are interested in acquiring, such as:

- 🌾 **Farms**
- 👑 **VIP Facção**
- 👕 **Clothing**
- 🛠️ **Modifications inside the faction**`,
    es: `## ¿QUÉ ES UN WIPE?

El wipe es el **reset de la ciudad** para el inicio de una nueva season. Antes de que ocurra, todos reciben aviso con **3 días de antelación**.

El **Comercial y la Operación** se enteran antes para organizarse. Cuando el wipe se confirma, ambos equipos se reúnen para hablar con los líderes.

La mayor parte de la conversación con las facciones está a cargo de la **Operación**, ya que conocen mejor a los líderes que nosotros en el Comercial. Nosotros entramos para tratar la **venta de los ítems** que los líderes vayan a mantener o tengan interés en adquirir, como:

- 🌾 **Farms**
- 👑 **VIP Facção**
- 👕 **Ropa**
- 🛠️ **Modificaciones dentro de la facción**`,
  },
  { pt: 'Aviso prévio', en: 'Advance notice', es: 'Aviso previo' },
  {
    pt: 'Todo wipe é anunciado com 3 dias de antecedência. Comercial e Operação são avisados antes para se organizarem.',
    en: 'Every wipe is announced 3 days in advance. Commercial and Operations are notified beforehand so they can organize.',
    es: 'Todo wipe se anuncia con 3 días de antelación. Comercial y Operación son avisados antes para organizarse.',
  },
  { pt: 'Ação conjunta', en: 'Joint action', es: 'Acción conjunta' },
  {
    pt: 'Operação e Comercial se juntam para falar com as lideranças. A Operação conduz a conversa por conhecer melhor os líderes.',
    en: 'Operations and Commercial get together to speak with the leadership. Operations leads the conversation as they know the leaders better.',
    es: 'Operación y Comercial se reúnen para hablar con los líderes. Operación conduce la conversación por conocer mejor a los líderes.',
  },
  { pt: 'Papel do Comercial', en: 'Commercial\'s role', es: 'Rol del Comercial' },
  {
    pt: 'Entramos para tratar da venda dos itens que os líderes irão manter ou tenham interesse em adquirir na próxima season.',
    en: 'We come in to handle the sale of items the leaders will keep or are interested in acquiring for the next season.',
    es: 'Entramos para tratar la venta de los ítems que los líderes mantendrán o tengan interés en adquirir en la próxima season.',
  },

  // ============ WIPE — Negociação ============
  { pt: 'Negociação', en: 'Negotiation', es: 'Negociación' },
  {
    pt: 'Como o Comercial aborda os melhores clientes e calcula a renovação dos itens de alto valor para a próxima season.',
    en: 'How Commercial approaches top clients and calculates the renewal of high-value items for the next season.',
    es: 'Cómo el Comercial aborda a los mejores clientes y calcula la renovación de los ítems de alto valor para la próxima season.',
  },
  { pt: 'Clientes Prioridade', en: 'Priority Clients', es: 'Clientes Prioritarios' },
  {
    pt: 'O Comercial contata primeiro os melhores clientes, que têm prioridade para manter itens de alto valor.',
    en: 'Commercial contacts the top clients first, who have priority to keep high-value items.',
    es: 'El Comercial contacta primero a los mejores clientes, que tienen prioridad para mantener ítems de alto valor.',
  },
  { pt: 'Itens que entram na negociação', en: 'Items included in the negotiation', es: 'Ítems incluidos en la negociación' },
  {
    pt: 'Full blindados, IDs, propriedades e veículos exclusivos. Itens simples não entram nessa negociação.',
    en: 'Full armored vehicles, IDs, properties and exclusive vehicles. Simple items are not part of this negotiation.',
    es: 'Full blindados, IDs, propiedades y vehículos exclusivos. Los ítems simples no entran en esta negociación.',
  },
  { pt: 'Cálculo justo', en: 'Fair calculation', es: 'Cálculo justo' },
  {
    pt: 'O valor de renovação é proporcional ao tempo de uso do item durante a season, garantindo uma negociação justa.',
    en: 'The renewal amount is proportional to the item\'s usage time during the season, ensuring a fair negotiation.',
    es: 'El valor de renovación es proporcional al tiempo de uso del ítem durante la season, garantizando una negociación justa.',
  },
  {
    pt: `## NEGOCIAÇÃO PROATIVA

O Comercial atua de forma **proativa**: entramos em contato **primeiramente com os melhores clientes**, que têm prioridade para manter seus itens na próxima season.

Esses itens são geralmente de maior valor, como:

- 🛡️ **Full blindados**
- 🪪 **IDs**
- 🏠 **Propriedades**
- 🚗 **Veículos exclusivos**

**Priorize sempre itens exclusivos de maior valor.** De último caso, se o cliente perguntar sobre outros itens de valor mais baixo, você inclui na negociação, mas eles **não são prioridade**.`,
    en: `## PROACTIVE NEGOTIATION

Commercial acts **proactively**: we reach out **first to the top clients**, who have priority to keep their items in the next season.

These items are usually of higher value, such as:

- 🛡️ **Full armored vehicles**
- 🪪 **IDs**
- 🏠 **Properties**
- 🚗 **Exclusive vehicles**

**Always prioritize exclusive, higher-value items.** As a last resort, if the client asks about other lower-value items, you include them in the negotiation, but they **are not a priority**.`,
    es: `## NEGOCIACIÓN PROACTIVA

El Comercial actúa de forma **proactiva**: contactamos **primero a los mejores clientes**, que tienen prioridad para mantener sus ítems en la próxima season.

Esos ítems suelen ser de mayor valor, como:

- 🛡️ **Full blindados**
- 🪪 **IDs**
- 🏠 **Propiedades**
- 🚗 **Vehículos exclusivos**

**Prioriza siempre ítems exclusivos de mayor valor.** Como último recurso, si el cliente pregunta por otros ítems de valor más bajo, los incluyes en la negociación, pero **no son prioridad**.`,
  },
  { pt: 'CÁLCULO DE RENOVAÇÃO', en: 'RENEWAL CALCULATION', es: 'CÁLCULO DE RENOVACIÓN' },
  {
    pt: 'O valor considera a duração da season e o mês em que o item foi adquirido — o cliente paga proporcional ao tempo que ainda restaria de uso.',
    en: 'The amount considers the season duration and the month the item was acquired — the client pays proportionally to the remaining usage time.',
    es: 'El valor considera la duración de la season y el mes en que se adquirió el ítem — el cliente paga proporcional al tiempo de uso restante.',
  },
  {
    pt: `## COMO CALCULAR OS ITENS DOS MELHORES CLIENTES

O cálculo considera a **duração da season** e o **mês em que o item foi adquirido**.

**Exemplo prático:**

- 📅 Season: **12 meses**
- 🛒 Compra do item: **6º mês**
- 💰 Valor do item: **R$ 2.000,00**
- ⏳ Uso: **6 meses**
- 🔄 Valor a pagar para renovação: **R$ 1.000,00 por +12 meses**

Dessa forma, cada cliente paga proporcionalmente ao tempo que ainda irá utilizar, garantindo que a negociação seja **justa e organizada**.`,
    en: `## HOW TO CALCULATE ITEMS FOR TOP CLIENTS

The calculation considers the **season duration** and the **month the item was acquired**.

**Practical example:**

- 📅 Season: **12 months**
- 🛒 Item purchase: **6th month**
- 💰 Item value: **R$ 2,000.00**
- ⏳ Usage: **6 months**
- 🔄 Renewal amount: **R$ 1,000.00 for +12 months**

This way, each client pays proportionally to the remaining usage time, ensuring the negotiation is **fair and organized**.`,
    es: `## CÓMO CALCULAR LOS ÍTEMS DE LOS MEJORES CLIENTES

El cálculo considera la **duración de la season** y el **mes en que se adquirió el ítem**.

**Ejemplo práctico:**

- 📅 Season: **12 meses**
- 🛒 Compra del ítem: **mes 6**
- 💰 Valor del ítem: **R$ 2.000,00**
- ⏳ Uso: **6 meses**
- 🔄 Valor a pagar por la renovación: **R$ 1.000,00 por +12 meses**

Así, cada cliente paga proporcionalmente al tiempo que aún usará, garantizando una negociación **justa y organizada**.`,
  },
  {
    pt: `## DICA DE ORGANIZAÇÃO

Para clientes muito bons, monte uma **planilha durante a season** contendo:

- 🏷️ **Nome do Item**
- 💵 **Valor do Item**
- 📆 **Data de aquisição**

Assim, na hora da **call com o cliente**, tudo já estará pronto para o cálculo. A conversa flui rápida, profissional e sem improviso.`,
    en: `## ORGANIZATION TIP

For very good clients, build a **spreadsheet during the season** containing:

- 🏷️ **Item name**
- 💵 **Item value**
- 📆 **Purchase date**

That way, when it's time for the **call with the client**, everything is ready for the calculation. The conversation flows quickly, professionally and without improvisation.`,
    es: `## CONSEJO DE ORGANIZACIÓN

Para clientes muy buenos, arma una **planilla durante la season** que contenga:

- 🏷️ **Nombre del ítem**
- 💵 **Valor del ítem**
- 📆 **Fecha de adquisición**

Así, a la hora de la **llamada con el cliente**, todo ya estará listo para el cálculo. La conversación fluye rápida, profesional y sin improvisación.`,
  },

  // ============ WIPE — Sistema de Créditos ============
  { pt: 'Sistema de Créditos', en: 'Credit System', es: 'Sistema de Créditos' },
  {
    pt: 'Como o cashback do valor gasto pelos clientes é convertido em créditos na loja após o wipe, de acordo com a data das compras realizadas antes do reset.',
    en: 'How the cashback on the amount spent by clients is converted into store credits after the wipe, according to the date of purchases made before the reset.',
    es: 'Cómo el cashback del valor gastado por los clientes se convierte en créditos en la tienda después del wipe, según la fecha de las compras realizadas antes del reset.',
  },
  { pt: 'Últimos 20 dias', en: 'Last 20 days', es: 'Últimos 20 días' },
  {
    pt: '100% de cashback do valor gasto. Compras realizadas nos 20 dias anteriores ao wipe são convertidas em 100% de créditos na loja.',
    en: '100% cashback on the amount spent. Purchases made in the 20 days prior to the wipe are converted into 100% store credit.',
    es: '100% de cashback del valor gastado. Las compras realizadas en los 20 días anteriores al wipe se convierten en 100% de créditos en la tienda.',
  },
  { pt: 'De 20 à 30 dias', en: '20 to 30 days', es: 'De 20 a 30 días' },
  {
    pt: '50% de cashback do valor gasto. Compras realizadas entre 20 e 30 dias antes do wipe são convertidas em 50% de créditos na loja.',
    en: '50% cashback on the amount spent. Purchases made between 20 and 30 days before the wipe are converted into 50% store credit.',
    es: '50% de cashback del valor gastado. Las compras realizadas entre 20 y 30 días antes del wipe se convierten en 50% de créditos en la tienda.',
  },
  { pt: 'Forma de agradecer', en: 'A way to say thanks', es: 'Forma de agradecer' },
  {
    pt: 'É a nossa forma de agradecer o cliente por continuar com a gente na próxima season.',
    en: 'It\'s our way of thanking the client for staying with us in the next season.',
    es: 'Es nuestra forma de agradecer al cliente por seguir con nosotros en la próxima season.',
  },
  { pt: 'ÚLTIMOS 20 DIAS | 100% DE CASHBACK', en: 'LAST 20 DAYS | 100% CASHBACK', es: 'ÚLTIMOS 20 DÍAS | 100% DE CASHBACK' },
  {
    pt: 'Compras realizadas nos últimos 20 dias antes do wipe serão convertidas em 100% de créditos na loja. Exemplo: compras entre 21/03 e 10/04 = 100% de créditos.',
    en: 'Purchases made in the last 20 days before the wipe will be converted into 100% store credit. Example: purchases between 03/21 and 04/10 = 100% credit.',
    es: 'Las compras realizadas en los últimos 20 días antes del wipe se convertirán en 100% de créditos en la tienda. Ejemplo: compras entre 21/03 y 10/04 = 100% de créditos.',
  },
  { pt: 'DE 20 À 30 DIAS | 50% DE CASHBACK', en: '20 TO 30 DAYS | 50% CASHBACK', es: 'DE 20 A 30 DÍAS | 50% DE CASHBACK' },
  {
    pt: 'Compras realizadas entre 20 e 30 dias antes do wipe serão convertidas em 50% de créditos na loja. Exemplo: compras entre 11/03 e 20/03 = 50% de créditos.',
    en: 'Purchases made between 20 and 30 days before the wipe will be converted into 50% store credit. Example: purchases between 03/11 and 03/20 = 50% credit.',
    es: 'Las compras realizadas entre 20 y 30 días antes del wipe se convertirán en 50% de créditos en la tienda. Ejemplo: compras entre 11/03 y 20/03 = 50% de créditos.',
  },
  {
    pt: `## COMO FUNCIONA

Após o wipe, o cliente **não perde** o que investiu nos dias anteriores ao reset. Uma parte do valor gasto retorna como **crédito na loja** para ser utilizado na nova season.

A conversão depende de **quando a compra foi feita** em relação à data do wipe:

- 🟢 **Últimos 20 dias antes do wipe** → **100% de cashback** em créditos
- 🟡 **Entre 20 e 30 dias antes do wipe** → **50% de cashback** em créditos
- 🔴 **Mais de 30 dias antes do wipe** → não entra na conversão

## EXEMPLO PRÁTICO

Considerando um wipe no dia **10/04**:

- 🟢 Compras entre **21/03 e 10/04** → convertidas em **100% de créditos** na loja
- 🟡 Compras entre **11/03 e 20/03** → convertidas em **50% de créditos** na loja

É a nossa forma de **agradecer o cliente** por continuar com a gente na próxima season.`,
    en: `## HOW IT WORKS

After the wipe, the client **does not lose** what they invested in the days before the reset. Part of the amount spent comes back as **store credit** to be used in the new season.

The conversion depends on **when the purchase was made** in relation to the wipe date:

- 🟢 **Last 20 days before the wipe** → **100% cashback** as credit
- 🟡 **Between 20 and 30 days before the wipe** → **50% cashback** as credit
- 🔴 **More than 30 days before the wipe** → not eligible for conversion

## PRACTICAL EXAMPLE

Considering a wipe on **04/10**:

- 🟢 Purchases between **03/21 and 04/10** → converted into **100% store credit**
- 🟡 Purchases between **03/11 and 03/20** → converted into **50% store credit**

It's our way of **thanking the client** for staying with us in the next season.`,
    es: `## CÓMO FUNCIONA

Después del wipe, el cliente **no pierde** lo que invirtió en los días previos al reset. Una parte del valor gastado vuelve como **crédito en la tienda** para usar en la nueva season.

La conversión depende de **cuándo se hizo la compra** con respecto a la fecha del wipe:

- 🟢 **Últimos 20 días antes del wipe** → **100% de cashback** en créditos
- 🟡 **Entre 20 y 30 días antes del wipe** → **50% de cashback** en créditos
- 🔴 **Más de 30 días antes del wipe** → no entra en la conversión

## EJEMPLO PRÁCTICO

Considerando un wipe el día **10/04**:

- 🟢 Compras entre **21/03 y 10/04** → convertidas en **100% de créditos** en la tienda
- 🟡 Compras entre **11/03 y 20/03** → convertidas en **50% de créditos** en la tienda

Es nuestra forma de **agradecer al cliente** por seguir con nosotros en la próxima season.`,
  },

  // Critérios nas Equipes — mantido apenas em PT (sem tradução para EN/ES)


  // ============ WIPE — Quebra de Objeções ============
  { pt: 'Quebra de Objeções', en: 'Handling Objections', es: 'Manejo de Objeciones' },
  {
    pt: 'Como responder com segurança quando o cliente adia a compra alegando que o wipe está próximo.',
    en: 'How to respond confidently when the client delays the purchase claiming the wipe is near.',
    es: 'Cómo responder con seguridad cuando el cliente pospone la compra alegando que el wipe está cerca.',
  },
  { pt: 'Sem previsão oficial', en: 'No official date', es: 'Sin fecha oficial' },
  {
    pt: 'Nunca existe uma data confirmada de wipe. Não especule, não confirme e não sugira prazos.',
    en: 'There is never a confirmed wipe date. Do not speculate, confirm or suggest timeframes.',
    es: 'Nunca hay una fecha confirmada de wipe. No especules, confirmes ni sugieras plazos.',
  },
  { pt: 'Compra sempre valorizada', en: 'Purchase always valued', es: 'Compra siempre valorada' },
  {
    pt: 'Se o wipe acontecer, o cliente paga apenas o proporcional para renovar o item na próxima season.',
    en: 'If the wipe happens, the client only pays the proportional amount to renew the item in the next season.',
    es: 'Si ocurre el wipe, el cliente solo paga la parte proporcional para renovar el ítem en la próxima season.',
  },
  { pt: 'Segurança na resposta', en: 'Confident response', es: 'Respuesta con seguridad' },
  {
    pt: 'Passe confiança: o investimento nunca é perdido e o tempo de uso sempre é considerado.',
    en: 'Convey confidence: the investment is never lost and the usage time is always taken into account.',
    es: 'Transmite confianza: la inversión nunca se pierde y el tiempo de uso siempre se considera.',
  },
  { pt: '⚠️ REGRA DE OURO', en: '⚠️ GOLDEN RULE', es: '⚠️ REGLA DE ORO' },
  {
    pt: 'Nunca confirme, especule ou informe uma possível data de wipe. A resposta deve ser sempre:|||não existe nenhuma previsão oficial.',
    en: 'Never confirm, speculate or share a possible wipe date. The answer must always be:|||there is no official forecast.',
    es: 'Nunca confirmes, especules ni informes una posible fecha de wipe. La respuesta debe ser siempre:|||no existe ninguna previsión oficial.',
  },
  {
    pt: `## ⏳ O QUE MAIS OUVIMOS QUANDO A SEASON JÁ TEM 4 OU 5 MESES

- 💬 "Quando vai ter wipe?"
- 💬 "O wipe está próximo?"
- 💬 "Não vou comprar agora porque vai wipar em breve."
- 💬 "Falta pouco tempo para o wipe."
- 💬 "Na próxima season eu compro."

## ❓ COMO RESPONDER QUANDO UM CLIENTE DISSER ISSO

Deixe claro que **nunca existe uma previsão oficial de wipe**. Informe que não temos conhecimento de quando o próximo wipe acontecerá e que **não é correto** afirmar que ele está próximo ou que ocorrerá em breve.

Em seguida, mostre ao cliente que ele **não será prejudicado** e que a compra **não será em vão**:

- 🛡️ Se ele adquirir um item exclusivo e futuramente ocorrer um wipe, será considerado o **período em que o item foi utilizado**.
- 🧮 Com base no **tempo de uso** e no **valor do veículo ou item**, será calculado apenas o valor necessário para a **renovação em uma nova season completa**.
- 🤝 Ou seja, o cliente **não será esquecido**, a compra continua sendo valorizada e todo o investimento é levado em consideração.`,
    en: `## ⏳ WHAT WE HEAR THE MOST WHEN THE SEASON IS ALREADY 4 OR 5 MONTHS IN

- 💬 "When is the wipe coming?"
- 💬 "Is the wipe close?"
- 💬 "I won't buy now because it will wipe soon."
- 💬 "The wipe is just around the corner."
- 💬 "I'll buy in the next season."

## ❓ HOW TO RESPOND WHEN A CLIENT SAYS THIS

Make it clear that **there is never an official wipe forecast**. Explain that we don't know when the next wipe will happen and that it is **not correct** to claim it is near or that it will happen soon.

Then show the client they **won't be harmed** and that the purchase **won't be in vain**:

- 🛡️ If they buy an exclusive item and a wipe later happens, the **time the item was actually used** will be taken into account.
- 🧮 Based on the **usage time** and the **value of the vehicle or item**, only the amount needed to **renew for a full new season** will be charged.
- 🤝 In other words, the client **won't be forgotten**, the purchase remains valued and the whole investment is taken into consideration.`,
    es: `## ⏳ LO QUE MÁS ESCUCHAMOS CUANDO LA SEASON YA TIENE 4 O 5 MESES

- 💬 "¿Cuándo va a haber wipe?"
- 💬 "¿El wipe está cerca?"
- 💬 "No voy a comprar ahora porque va a wipear pronto."
- 💬 "Falta poco para el wipe."
- 💬 "En la próxima season compro."

## ❓ CÓMO RESPONDER CUANDO UN CLIENTE DIGA ESTO

Deja claro que **nunca existe una previsión oficial de wipe**. Informa que no sabemos cuándo ocurrirá el próximo wipe y que **no es correcto** afirmar que está cerca o que ocurrirá pronto.

Luego muéstrale al cliente que **no será perjudicado** y que la compra **no será en vano**:

- 🛡️ Si adquiere un ítem exclusivo y en el futuro ocurre un wipe, se considerará el **período en el que el ítem fue utilizado**.
- 🧮 En base al **tiempo de uso** y al **valor del vehículo o ítem**, se calculará solo el valor necesario para la **renovación en una nueva season completa**.
- 🤝 Es decir, el cliente **no será olvidado**, la compra sigue siendo valorada y toda la inversión se tiene en cuenta.`,
  },
];

const exactIndex = new Map<string, PhraseRecord>();

function normalize(value: string) {
  return value
    .normalize('NFKC')
    .replace(/\s+/g, ' ')
    .replace(/^[\s"'“”‘’`]+|[\s"'“”‘’`]+$/g, '')
    .toLocaleLowerCase('pt-BR');
}

function indexPhrase(record: PhraseRecord, value: string) {
  exactIndex.set(normalize(value), record);
}

for (const record of phraseRecords) {
  indexPhrase(record, record.pt);
  indexPhrase(record, record.en);
  indexPhrase(record, record.es);
  record.aliases?.forEach((alias) => indexPhrase(record, alias));
}

function isUppercaseText(value: string) {
  const letters = value.replace(/[^\p{L}]/gu, '');
  return letters.length > 1 && letters === letters.toLocaleUpperCase('pt-BR');
}

function applyOriginalCasing(original: string, translated: string) {
  if (isUppercaseText(original)) {
    return translated.toLocaleUpperCase(original.includes('Ñ') ? 'es' : 'en');
  }
  return translated;
}

const WRAPPER_PAIRS: Record<string, string> = {
  '"': '"',
  "'": "'",
  '`': '`',
  '“': '”',
  '‘': '’',
};

function preserveWrappers(original: string, translated: string) {
  const first = original[0];
  const last = original[original.length - 1];
  if (WRAPPER_PAIRS[first] && WRAPPER_PAIRS[first] === last) {
    if (translated.startsWith(first) && translated.endsWith(last)) return translated;
    return `${first}${translated}${last}`;
  }
  return translated;
}

function translateMatchedCore(core: string, language: Language, record: PhraseRecord) {
  const translated = applyOriginalCasing(core, record[language]);
  return preserveWrappers(core, translated);
}

function translateDecoratedCore(core: string, language: Language) {
  const decorated = core.match(/^([^\p{L}\p{N}/"'`“‘]+)(.+)$/u);
  if (!decorated) return null;

  const [, prefix, rest] = decorated;
  const record = exactIndex.get(normalize(rest));
  if (!record) return null;

  return `${prefix}${translateMatchedCore(rest, language, record)}`;
}

const dynamicPatterns = [
  {
    pattern: /^Nenhum resultado para\s+"(.+)"$/i,
    render: {
      pt: (term: string) => `Nenhum resultado para "${term}"`,
      en: (term: string) => `No results for "${term}"`,
      es: (term: string) => `No hay resultados para "${term}"`,
    },
  },
  {
    pattern: /^No results for\s+"(.+)"$/i,
    render: {
      pt: (term: string) => `Nenhum resultado para "${term}"`,
      en: (term: string) => `No results for "${term}"`,
      es: (term: string) => `No hay resultados para "${term}"`,
    },
  },
  {
    pattern: /^No hay resultados para\s+"(.+)"$/i,
    render: {
      pt: (term: string) => `Nenhum resultado para "${term}"`,
      en: (term: string) => `No results for "${term}"`,
      es: (term: string) => `No hay resultados para "${term}"`,
    },
  },
] as const;

export function translateText(value: string, language: Language) {
  if (!value.trim()) return value;

  const leading = value.match(/^\s*/)?.[0] || '';
  const trailing = value.match(/\s*$/)?.[0] || '';
  const core = value.trim();
  const record = exactIndex.get(normalize(core));

  if (record) {
    return `${leading}${translateMatchedCore(core, language, record)}${trailing}`;
  }

  const decorated = translateDecoratedCore(core, language);
  if (decorated) {
    return `${leading}${decorated}${trailing}`;
  }

  for (const { pattern, render } of dynamicPatterns) {
    const match = core.match(pattern);
    if (match) {
      return `${leading}${render[language](...match.slice(1) as [string])}${trailing}`;
    }
  }

  return value;
}
