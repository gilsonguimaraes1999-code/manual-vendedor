export type Language = 'pt' | 'en' | 'es';

export const translations: Record<Language, any> = {
  pt: {
    menu: {
      groups: {
        inicioRp: 'INÍCIO DE RP',
        comercial: 'COMERCIAL',
        afiliadosGroup: 'AFILIADOS',
        wipeGroup: 'WIPE'
      },
      inicio: 'Início',
      primeirosPassos: 'Primeiros Passos',
      sistemaCidade: 'Sistema da Cidade',
      sistemaFarms: 'Sistema de Farms',
      regrasCidade: 'Regras da Cidade',
      controlesBasicos: 'Controles Básicos',
      comercialOperacao: 'Comercial / Operação',
      sistemasPrincipais: 'Sistemas Principais',
      poderesAdmin: 'Poderes (Admin)',
      comandosFrequentes: 'Comandos Frequentes',
      podeNaoPode: 'Pode e Não Pode',
      dicasRapidas: 'Dicas Rápidas',
      bindsEssenciais: 'Binds Essenciais',
      afiliados: 'Equipe de Afiliados'
    },
    buttons: {
      verVideo: 'Ver Vídeo',
      verConfiguracao: 'Ver Configuração',
      abrirLink: 'Abrir Link',
      copiarLink: 'Copiar Link',
      copiado: 'Copiado!',
      fechar: 'Fechar',
      salvar: 'Salvar',
      editar: 'Editar',
      apagar: 'Apagar',
      cancelar: 'Cancelar',
      entrarSistema: 'Entrar no Sistema',
      entrarVisitante: 'Entrar como Visitante',
      verComoVisitante: 'Ver como Visitante',
      sairModoVisitante: 'Sair do Modo Visitante',
      adicionarItem: 'Adicionar Item',
      confirmarCriar: 'Confirmar e Criar Conta'
    },
    login: {
      username: 'Usuário',
      password: 'Senha',
      title: 'Acesso Restrito',
      subtitle: 'Manual do Vendedor',
      portalAccess: 'Acessar Portal',
      rememberAccess: 'Lembrar acesso',
      backToUser: 'Voltar para usuario',
      requiredUser: 'Informe o usuario de acesso.',
      continue: 'Continuar',
      enter: 'Entrar',
      hidePassword: 'Ocultar senha',
      showPassword: 'Mostrar senha',
      errorUserNotFound: 'Usuário não encontrado.',
      errorWrongPassword: 'Senha incorreta.',
      errorDisabled: 'Conta desativada.',
      accessOnly: 'Acesso exclusivo para membros autorizados.'
    },
    settings: {
      title: 'Configurações',
      accounts: 'Contas de Acesso',
      siteConfig: 'Configuração do Site',
      createAccount: 'Criar Nova Conta',
      editAccount: 'Editar Conta',
      disableAccount: 'Desativar Conta',
      enableAccount: 'Ativar Conta',
      deleteAccount: 'Excluir Conta',
      categoryName: 'Nome da Categoria',
      menuGroup: 'Grupo do Menu',
      icon: 'Ícone',
      visualStructure: 'Estrutura Visual',
      no_categories: 'NENHUMA CATEGORIA ADICIONADA',
      search_user: 'Pesquisar usuário...'
    },
    pages: {
      inicio: {
        title: 'Manual Comercial',
        subtitle: 'Manual',
        text: 'Bem-vindo ao Comercial SantaGroup. Este manual foi criado para ensinar como jogar o roleplay e como utilizar seus poderes de forma correta.',
        evolution_title: 'Evolução',
        evolution_desc: 'Comece com pequenos trabalhos, conheça pessoas e consequentemente traga resultados.'
      },
      comercial_operacao: {
        title: 'Comercial / Operação',
        rules_title: 'REGRAS IMPORTANTES',
        operacao_title: 'OPERAÇÃO',
        operacao_rules: [
          'Responsável por regras da cidade',
          'Aplica punições gerais (ban, advertência, etc)',
          'Resolve tudo relacionado a administração'
        ],
        comercial_title: 'COMERCIAL',
        comercial_rules: [
          'Responsável por vendas',
          'Benefícios e produtos',
          'Relacionamento com cliente',
          'Punições (Banimentos apenas por questões comerciais)'
        ],
        guidelines_title: 'DIRETRIZES E DIRECIONAMENTOS',
        q1: 'Comercial Interfere em banimentos?',
        a1: 'O comercial não possui autoridade para alterar, revisar ou opinar sobre decisões da operação.',
        q2: 'Comercial negocia punições de banimentos e advertências?',
        a2: 'Nenhuma punição pode ser flexibilizada, negociada ou “ajustada” pelo comercial.',
        q3: 'Quem pode resolver essas questões de banimentos e advertências?',
        a3: 'Toda situação envolvendo punição ou advertência é responsabilidade da equipe operacional.',
        q4: 'Cliente foi banido ou advertido sem que seja pelo Comercial?',
        a4: 'Em caso de banimentos ou advertências que não forem por motivos comerciais, encaminhar o cliente a procurar alguém da operação.',
        q5: 'Cliente com problema com um staff?',
        a5: 'O cliente tem algum problema com algum staff da operação? Encaminhe o cliente para alguém da Diretoria da cidade.',
        q6: 'Cliente possui dúvidas referente a um produto, vip ou gostaria de efetuar uma compra?',
        a6: 'O comercial é responsável por essa área. Então apenas o comercial pode falar preço de Item, ou tirar dúvidas relacionadas a compra.',
        hierarchy_title: 'Hierarquia da Operação',
        golden_rule: 'REGRA DE OURO',
        golden_rule_desc: 'O respeito à hierarquia evita erros e mantém a ordem estratégica da cidade.',
        levels: {
          dono: 'DONO DA CIDADE',
          dono_desc: 'Máxima autoridade da cidade. Responsável por definir diretrizes gerais e ter a palavra final.',
          diretoria: 'FISCALIZAÇÃO GERAL',
          diretoria_desc: 'Fiscaliza todas as áreas da cidade: cultura, wallstreet e orgs. Toma decisões críticas.',
          diretor_orgs: 'DIRETOR ORGS & LEGAL',
          diretor_orgs_desc: 'Mantém a cultura interna das facções e ilegal/legal em harmonia.',
          diretor_comunitario: 'DIRETOR COMUNIDADE',
          diretor_comunitario_desc: 'Mantém as pastas rodando e o suporte ao player ativo.',
          diretor_wallstreet: 'DIRETOR WALLSTREET',
          diretor_wallstreet_desc: 'Gestão de iniciantes e direcionamento para facções ou empregos.'
        }
      },
      primeirosPassos: {
        title: 'Primeiros Passos',
        char_creation: 'Criação de Personagem',
        char_creation_desc: 'Escolha um rosto e um nome para o seu personagem, este será o seu nome como vendedor. Pode ser o seu próprio ou um fictício.',
        spawn_city: 'Spawn na Cidade',
        spawn_city_desc: 'Você começará nascendo no PIER, a partir daí sua jornada será iniciada.',
        important_locations: 'Locais Importantes',
        important_locations_desc: 'Visite facções, organizações, empregos legais, Pier Sul/Norte e a praça. É nesses locais que há uma grande concentração de pessoas — e é justamente nessas regiões que você vai criar conexões e oportunidades.',
        first_interaction: 'Primeira Interação',
        first_interaction_desc: 'Converse com outros players e comece a se integrar na cidade.',
        activate_voip: 'Ativar VOIP (Voz)',
        activate_voip_desc: 'Configuração essencial para se comunicar por voz dentro da cidade.',
        voip_access: 'Acesso',
        voip_steps: [
          'Aperte a tecla "P"',
          'Clique em "Configurações"',
          'Selecione a opção "Bate-Papo"'
        ],
        voip_config: 'Configurações',
        voip_config_steps: [
          'Ative o Bate-Papo de Voz',
          'Ative o Microfone',
          'Modo de Bate-Papo: Pressionar para Falar'
        ],
        native_key: 'Tecla nativa utilizada para falar:',
        view_config: 'Ver Configuração',
        view_video: 'Ver Vídeo',
        cards: {
          criacaoPersonagem: {
            title: 'Criação de Personagem',
            description: 'Como criar seu personagem da forma correta.'
          },
          spawnCidade: {
            title: 'Spawn na Cidade',
            description: 'Onde você nasce e o que fazer primeiro.'
          },
          locaisImportantes: {
            title: 'Locais Importantes',
            description: 'Pontos chaves que você deve conhecer.'
          },
          primeiraInteracao: {
            title: 'Primeira Interação',
            description: 'Como iniciar conversas com outros jogadores.'
          },
          voip: {
            title: 'Configuração de VOIP',
            description: 'Como configurar seu rádio e voz.'
          }
        }
      },
      sistemas: {
        title: 'Sistema da Cidade',
        subtitle: 'Conheça os pilares da cidade, desde os serviços públicos até as interações sociais e o mundo do crime.',
        legal_jobs: 'Empregos Legais',
        legal_jobs_desc: 'São os trabalhos oficiais da cidade, focados em organização, serviço público e suporte à população.',
        illegal_jobs: 'Empregos Ilegais',
        police: 'POLÍCIA',
        police_desc: 'Responsável pela segurança da cidade, combate ao crime e organização das operações policiais.',
        doctor: 'MÉDICO (HOSPITAL)',
        doctor_desc: 'Atua no atendimento de feridos, salvando vidas e garantindo o suporte médico da cidade.',
        firefighters: 'BOMBEIROS',
        firefighters_desc: 'Responsável por resgates e emergências, atuando em situações críticas e salvando civis.',
        mechanic: 'MECÂNICO',
        mechanic_desc: 'Realiza manutenção e reparo de veículos, essencial para o funcionamento da cidade.',
        legal: 'JURÍDICO',
        legal_desc: 'Atua na defesa e organização das leis, garantindo justiça e equilíbrio dentro da cidade.'
      },
      commands: {
        controles_title: 'Controles Básicos',
        poderes_title: 'Poderes (Admin)',
        comandos_title: 'Comandos Frequentes',
        search_placeholder: 'Pesquisar comando...',
        no_results: 'Nenhum resultado para',
        admin_warning: 'ATENÇÃO: É extremamente proibido utilizar os poderes para benefício próprio ou prejudicar alguém. Enquadra como ABUSO DE PODER.',
        admin_intro: 'Abaixo estão quais os principais comandos utilizados dentro da cidade. Para utilizá-los basta clicar no "F8" e escrever o comando.',
        commercial_intro: 'Abaixo estão quais os comandos mais utilizados pelo comercial, dentro e fora de atendimento ao cliente.',
        game_commands: '🎮 Comandos do Jogo',
        detailed_commands: '⚡ Comandos Detalhados'
      },
      afiliados: {
        title: 'Equipe de Afiliados',
        subtitle: 'Programa de Parceria',
        intro: 'O programa de afiliados do SantaGroup é a porta de entrada para quem busca profissionalismo e resultados reais dentro da cidade.',
        formacao_title: '🧠 SEÇÃO 1 — AFILIADOS (FORMAÇÃO)',
        o_que_e_afiliado: {
          title: '🔰 O QUE É AFILIADO?',
          text: 'Um Afiliado é parte de uma equipe onde um Responsável de Vendas lidera, estrutura e desenvolve pessoas que realizam vendas dentro da cidade.'
        },
        o_que_e_ser_afiliado: {
          title: '🚀 O QUE É SER UM AFILIADO?',
          text: 'Ser afiliado é buscar evolução constante. É aprender, aplicar e crescer todos os dias. Onde o único que pode te parar, é você mesmo!'
        },
        erros_comuns: {
          title: '❌ ERROS COMUNS (O QUE EVITAR)',
          text: 'Muitos falham por falta de foco e persistência.',
          items: [
            'Procrastinação (deixar para amanhã)',
            'Falta de estudo sobre o produto',
            'Desistir nas primeiras dificuldades',
            'Não seguir o direcionamento do líder'
          ]
        },
        regras_basicas: {
          title: '⚖️ REGRAS BÁSICAS DO AFILIADO',
          items: [
            'Respeito total à hierarquia',
            'Manter a ética e profissionalismo',
            'Não utilizar de má fé os poderes',
            'Cumprir as metas estabelecidas'
          ]
        },
        metas: {
          title: '🎯 METAS E RESULTADOS',
          text: 'O afiliado deve focar em gerar valor e fechar negócios de forma honesta e transparente.'
        },
        evolucao_afiliado: {
          title: '📈 EVOLUÇÃO E PLANO DE CARREIRA',
          subtitle: 'Do Junior ao Elite',
          desc: 'Seu crescimento depende do seu esforço e dos resultados entregues.',
          criterios: 'Avaliação de desempenho, volume de vendas e feedback do líder.',
          niveis: ['Iniciante', 'Junior', 'Senior', 'Elite']
        },
        cultura_santagroup: {
          title: '🏛️ CULTURA SANTAGROUP',
          text: 'Nossa cultura é baseada em meritocracia, transparência e foco no cliente.'
        },
        recrutamento_setagem: {
          title: '📝 RECRUTAMENTO E SETAGEM',
          entrevista: 'Passar por entrevista com o Responsável.',
          setagem: 'Setagem oficial nos sistemas da cidade.'
        }
      },
      regras: {
        title: 'Regras da Cidade',
        definition_title: 'Definição de Roleplay',
        definition_text: 'O Roleplay (interpretado como "RP") é a arte de atuar como um personagem dentro de um universo fictício, respeitando sua personalidade, motivações e limitações. Na SantaGroup, o seu papel como vendedor exige que você mantenha a imersão total.',
        fundamental_rules: '📌 Regras Fundamentais',
        items: {
          vdm: { title: 'VDM', desc: 'Proibido usar qualquer tipo de veículo como arma para atropelar ou ferir outros cidadãos.' },
          rdm: { title: 'RDM', desc: 'Proibido ferir ou matar um cidadão sem que haja um motivo plausível dentro da história.' },
          metagaming: { title: 'Metagaming', desc: 'Proibido utilizar informações obtidas fora do jogo (Discord, Lives) para ganho próprio dentro do RP.' },
          anti_rp: { title: 'Anti RP', desc: 'Proibido agir de forma que fira a lógica da vida real ou quebre a imersão do cenário atual.' },
          powergaming: { title: 'Powergaming', desc: 'Proibido realizar ações impossíveis ou forçar situações onde o outro jogador não tenha escolha.' },
          amor_vida: { title: 'Amor à Vida', desc: 'Regra de ouro: trate a vida do seu personagem como se fosse a única. Valorize-a acima de tudo.' }
        }
      },
      pode_nao_pode: {
        title: 'Pode e Não Pode',
        pode_title: '✅ PODE',
        nao_pode_title: '❌ NÃO PODE',
        pode_items: [
          'Interagir com todos os cidadãos livremente',
          'Criar uma história cativante para vender melhor',
          'Ser imparcial em conflitos de terceiros',
          'Fazer amizades genuínas nas organizações'
        ],
        nao_pode_items: {
          broken_rp: {
            title: 'Quebrar RP (Sair do personagem)',
            explanation: 'Quebrar RP é parar de interpretar seu personagem e trazer a "Nárnia" (vida real) pra dentro do jogo.'
          },
          abuse_powers: {
            title: 'Abusar de poderes para benefício próprio',
            explanation: 'Abusar de Poder é usar seus poderes para benefício próprio, e não para vendas.'
          },
          toxic_fights: 'Causar brigas tóxicas com outros players',
          cheats: 'Usar cheats, hacks ou bugs conhecidos',
          price_change: 'Alterar preços oficiais definidos pela SantaGroup',
          unauthorized_gifts: 'Dar brindes ou itens sem autorização prévia'
        },
        view_explanation: 'Ver Explicação'
      },
      dicas: {
        title: 'Dicas Rápidas',
        items: [
          { title: '📌 SEMPRE PERGUNTE', desc: 'Em caso de dúvida técnica ou sobre RP, chame alguém mais experiente ou suporte via Discord.' },
          { title: '📌 COMECE SIMPLES', desc: 'Crie relações primeiro. Vendas são consequências de boas conexões na cidade.' },
          { title: '📌 QUALIDADE', desc: 'Lembre-se que o pós-venda é mais importante que a venda em si para manter o cliente.' },
          { title: '📌 ATENDIMENTO', desc: 'Conheça bem o produto. A autoridade no assunto gera confiança imediata.' }
        ]
      },
      binds: {
        title: 'Binds Essenciais (Vendedor)',
        objective_title: '🎯 OBJETIVO',
        objective_desc: 'Facilitar ações rápidas no dia a dia e ganhar agilidade no atendimento',
        how_to_use: '🧩 COMO USAR AS BINDS',
        steps: ['Pressione F8', 'Cole o comando', 'Aperte Enter'],
        recommended_title: '📌 BINDS RECOMENDADAS',
        copy_bind: 'Copiar Bind',
        important_note: '⚠️ OBSERVAÇÃO IMPORTANTE',
        note_text: 'As binds utilizadas nos exemplos foram configuradas no teclado numérico (lado direito do teclado).',
        any_key: '👉 Porém, você pode usar qualquer tecla, como:',
        key_types: ['Letras', 'Números', 'Teclas F (F1, F2, F3...)'],
        mentality_title: '🧠 MENTALIDADE',
        mentality_desc: '“agilidade no comando = mais eficiência no atendimento” ⚡',
        items: {
          nc: { title: '📍 NC (modo invisível)', desc: 'Use para observação e posicionamento' },
          god: { title: '📍 GOD (reviver)', desc: 'Use para suporte rápido ao player' },
          wall: { title: '📍 WALL (informações do player)', desc: 'Use para análise rápida do cliente' },
          fix: { title: '📍 FIX (consertar veículo)', desc: 'Use para ajudar o cliente rapidamente' },
          dv: { title: '📍 DV (deletar veículo)', desc: 'Use para limpar área ou remover veículo bugado' }
        }
      }
    },
    general: {
      search: 'Pesquisar...',
      active: 'Ativo',
      inactive: 'Desativado',
      loading: 'Carregando...',
      manual_status: 'Status do Manual',
      manual_desc: 'Manual do novo vendedor. Focado em treinamento e integração oficial.',
      waiting_config: 'Aguardando conteúdo ser configurado pelo Owner...',
      key: 'Tecla',
      command: 'Comando',
      what_does: 'O que faz',
      when_use: 'Quando usar',
      example_shortcuts: 'Exemplo / Atalhos',
      note: 'Nota',
      watch_video: 'Ver Vídeo'
    }
  },
  en: {},
  es: {},
};
