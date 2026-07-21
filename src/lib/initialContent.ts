import { 
  Home, 
  MapPin, 
  ShieldAlert, 
  Fish, 
  Gavel, 
  Keyboard, 
  Banknote, 
  Zap, 
  Terminal, 
  CheckCircle2, 
  Lightbulb, 
  Users,
  Box,
  FileText,
  AlertTriangle,
  Info,
  TrendingUp,
  Award,
  Layers,
  CreditCard
} from 'lucide-react';

export const INITIAL_CATEGORIES = [
  {
    id: 'inicio',
    name: 'Início',
    group: 'INÍCIO DE RP',
    icon: 'Home',
    order: 1,
    visible: true,
    contentBlocks: [
      { type: 'header', title: 'Manual Comercial', subtitle: '', text: 'Bem-vindo ao Comercial SantaGroup. Este manual foi criado para ensinar como jogar o roleplay e como utilizar seus poderes de forma correta.' }
    ]
  },
  {
    id: 'primeiros-passos',
    name: 'Primeiros Passos',
    group: 'INÍCIO DE RP',
    icon: 'MapPin',
    order: 2,
    visible: true,
    contentBlocks: []
  },
  {
    id: 'sistemas',
    name: 'Sistema da Cidade',
    group: 'INÍCIO DE RP',
    icon: 'ShieldAlert',
    order: 3,
    visible: true,
    contentBlocks: []
  },
  {
    id: 'farms',
    name: 'Sistema de Farms',
    group: 'INÍCIO DE RP',
    icon: 'Fish',
    order: 4,
    visible: true,
    contentBlocks: []
  },
  {
    id: 'regras',
    name: 'Regras da Cidade',
    group: 'INÍCIO DE RP',
    icon: 'Gavel',
    order: 5,
    visible: true,
    contentBlocks: []
  },
  {
    id: 'controles',
    name: 'Controles Básicos',
    group: 'INÍCIO DE RP',
    icon: 'Keyboard',
    order: 6,
    visible: true,
    contentBlocks: []
  },
  {
    id: 'comercial-operacao',
    name: 'Comercial / Operação',
    group: 'COMERCIAL',
    icon: 'Banknote',
    order: 7,
    visible: true,
    contentBlocks: []
  },
  {
    id: 'sistemas-principais',
    name: 'Sistemas Principais',
    group: 'COMERCIAL',
    icon: 'Zap',
    order: 8,
    visible: true,
    contentBlocks: []
  },
  {
    id: 'pode-nao-pode',
    name: 'Pode e Não Pode',
    group: 'COMERCIAL',
    icon: 'Lightbulb',
    order: 9,
    visible: true,
    contentBlocks: []
  },
  {
    id: 'poderes',
    name: 'Poderes (Admin)',
    group: 'COMERCIAL',
    icon: 'Terminal',
    order: 10,
    visible: true,
    contentBlocks: []
  },
  {
    id: 'comandos',
    name: 'Comandos Frequentes',
    group: 'COMERCIAL',
    icon: 'CheckCircle2',
    order: 11,
    visible: true,
    contentBlocks: []
  },
  {
    id: 'dicas',
    name: 'Dicas Rápidas',
    group: 'COMERCIAL',
    icon: 'Lightbulb',
    order: 12,
    visible: true,
    contentBlocks: []
  },
  {
    id: 'binds',
    name: 'Binds Essenciais',
    group: 'COMERCIAL',
    icon: 'Keyboard',
    order: 13,
    visible: true,
    contentBlocks: []
  },
  {
    id: 'afiliados',
    name: 'Equipe de Afiliados',
    group: 'AFILIADOS',
    icon: 'Users',
    order: 14,
    visible: true,
    contentBlocks: []
  },
  {
    id: 'beneficios-afiliados',
    name: 'Benefícios de Afiliados',
    group: 'AFILIADOS',
    icon: 'Award',
    order: 15,
    visible: true,
    contentBlocks: [
      {
        type: 'header',
        subtitle: '',
        title: 'Benefícios de Afiliados',
        text: 'Entenda como funciona o cashback, onde ele pode ser usado e quais regras precisam ser respeitadas dentro da equipe de afiliados.'
      },
      {
        type: 'grid',
        items: [
          {
            title: 'Cashback por venda',
            description: 'Todo afiliado recebe uma porcentagem sobre cada venda realizada, normalmente entre 7% e 12%, conforme cargo e regras da cidade.'
          },
          {
            title: 'Crédito interno',
            description: 'O cashback funciona como um crédito dentro da cidade e pode ser utilizado apenas para benefício próprio.'
          },
          {
            title: 'Uso pessoal',
            description: 'Pode ser usado em itens pessoais como roupas, VIPs, blindados e outros benefícios disponíveis na nossa loja vip.'
          }
        ]
      },
      {
        type: 'text',
        content: `## QUAIS OS BENEFÍCIOS DE SER UM AFILIADO?

Todo afiliado, ao realizar uma venda, recebe **cashback sobre o valor vendido**. Esse cashback pode variar de acordo com o cargo dentro da equipe de vendas, normalmente entre **7% e 12%**, podendo ser ajustado conforme decisão do gerente da cidade.

O cashback pode ser usado para adquirir itens pessoais dentro da cidade, como **roupas, VIPs, blindados e outros benefícios disponíveis na nossa loja vip**.`
      },
      {
        type: 'alert',
        style: 'danger',
        title: 'USO EXCLUSIVO E PESSOAL',
        content: 'O cashback é de uso exclusivo e pessoal do afiliado. Ele não pode ser transferido, vendido, emprestado ou utilizado para beneficiar outra pessoa.'
      },
      {
        type: 'text',
        content: `## O QUE É CASHBACK?

Cashback é uma porcentagem gerada a partir de uma venda realizada pelo afiliado.

Na prática, funciona como um **crédito interno da cidade**, que pode ser usado apenas para **benefício próprio**.

## SAIU DA EQUIPE DE AFILIADOS E AINDA POSSUI CASHBACK?

O cashback só é válido enquanto o membro estiver ativo como afiliado.

Caso o afiliado seja removido da equipe, saia por conta própria ou deixe de fazer parte do programa antes de utilizar o saldo, o cashback será automaticamente perdido e não poderá ser recuperado.`
      }
    ]
  },
  {
    id: 'criterios-equipes',
    name: 'Critérios nas Equipes',
    group: 'AFILIADOS',
    icon: 'Trophy',
    order: 15.5,
    visible: true,
    contentBlocks: [
      {
        type: 'header',
        subtitle: '',
        title: 'Critérios nas Equipes',
        text: '👑 MASTER, ADM e RESP agora seguem critérios obrigatórios para assumir e manter o cargo.'
      },
      {
        type: 'text',
        content: `## 📋 REGRAS

Crescimento gradativo com base em:

- 📊 Desempenho consistente
- 🎯 Metas batidas
- 💰 Vendas frequentes
- 🤝 Ajuda e recrutamento
- 🟢 Presença ativa

## 💵 Meta mínima para alcançar cada cargo

- 📌 **RESP** → R$ 5.000+ vendidos
- 🛡️ **ADM** → R$ 10.000+ vendidos
- 👑 **MASTER** → R$ 15.000+ vendidos

## 📅 Meta diária obrigatória

- 💰 **META DIÁRIA POR MEMBRO** = R$ 300,00

## 🏆 Benefícios ao se tornar MASTER

- 👥 Criar e liderar sua própria equipe
- 📊 Vendas da equipe contam como mérito da sua gestão
- 🧠 Desenvolvimento em liderança e gestão comercial
- 🚀 Preparação para futuras oportunidades no TR Comercial`
      },
      {
        type: 'alert',
        style: 'danger',
        title: '⚠️ OBSERVAÇÕES IMPORTANTES',
        content: '❌ Ninguém entra direto nesses cargos.\n🔹 Só assume o cargo quem estiver estabilizado na pasta.\n🔁 Novos ou retornando começam como MEMBRO e evoluem por desempenho.'
      }
    ]
  },
  {
    id: 'wipe-o-que-e',
    name: 'O que é Wipe?',
    group: 'WIPE',
    icon: 'RefreshCw',
    order: 16,
    visible: true,
    contentBlocks: [
      {
        type: 'header',
        subtitle: '',
        title: 'O que é Wipe?',
        text: 'Entenda o que é um wipe, como o aviso chega e como Comercial e Operação se preparam junto com as facções.'
      },
      {
        type: 'text',
        content: `## O QUE É WIPE?

Wipe é o **reset da cidade** para o início de uma nova season. Antes que ele aconteça, todo mundo recebe aviso com **3 dias de antecedência**.

O **Comercial e a Operação** ficam sabendo antes para se organizar. Quando o wipe é confirmado, os dois times se juntam para conversar com os líderes.

A maior parte da troca de ideia com as facções fica a cargo da **Operação**, pois eles conhecem melhor os líderes do que nós do Comercial. Nós entramos para tratar da **venda dos itens** que os líderes irão manter ou tenham interesse em adquirir, como:

- 🌾 **Farms**
- 👑 **VIP Facção**
- 👕 **Roupas**
- 🛠️ **Modificações dentro da facção**`
      },
      {
        type: 'grid',
        items: [
          {
            title: 'Aviso prévio',
            description: 'Todo wipe é anunciado com 3 dias de antecedência. Comercial e Operação são avisados antes para se organizarem.'
          },
          {
            title: 'Ação conjunta',
            description: 'Operação e Comercial se juntam para falar com as lideranças. A Operação conduz a conversa por conhecer melhor os líderes.'
          },
          {
            title: 'Papel do Comercial',
            description: 'Entramos para tratar da venda dos itens que os líderes irão manter ou tenham interesse em adquirir na próxima season.'
          }
        ]
      }
    ]
  },
  {
    id: 'wipe-negociacao',
    name: 'Negociação',
    group: 'WIPE',
    icon: 'TrendingUp',
    order: 17,
    visible: true,
    contentBlocks: [
      {
        type: 'header',
        subtitle: '',
        title: 'Negociação',
        text: 'Como o Comercial aborda os melhores clientes e calcula a renovação dos itens de alto valor para a próxima season.'
      },
      {
        type: 'grid',
        items: [
          {
            title: 'Clientes Prioridade',
            description: 'O Comercial contata primeiro os melhores clientes, que têm prioridade para manter itens de alto valor.'
          },
          {
            title: 'Itens que entram na negociação',
            description: 'Full blindados, IDs, propriedades e veículos exclusivos. Itens simples não entram nessa negociação.'
          },
          {
            title: 'Cálculo justo',
            description: 'O valor de renovação é proporcional ao tempo de uso do item durante a season, garantindo uma negociação justa.'
          }
        ]
      },
      {
        type: 'text',
        content: `## NEGOCIAÇÃO PROATIVA

O Comercial atua de forma **proativa**: entramos em contato **primeiramente com os melhores clientes**, que têm prioridade para manter seus itens na próxima season.

Esses itens são geralmente de maior valor, como:

- 🛡️ **Full blindados**
- 🪪 **IDs**
- 🏠 **Propriedades**
- 🚗 **Veículos exclusivos**

**Priorize sempre itens exclusivos de maior valor.** De último caso, se o cliente perguntar sobre outros itens de valor mais baixo, você inclui na negociação, mas eles **não são prioridade**.`
      },
      {
        type: 'alert',
        title: 'CÁLCULO DE RENOVAÇÃO',
        content: 'O valor considera a duração da season e o mês em que o item foi adquirido — o cliente paga proporcional ao tempo que ainda restaria de uso.'
      },
      {
        type: 'text',
        content: `## COMO CALCULAR OS ITENS DOS MELHORES CLIENTES

O cálculo considera a **duração da season** e o **mês em que o item foi adquirido**.

**Exemplo prático:**

- 📅 Season: **12 meses**
- 🛒 Compra do item: **6º mês**
- 💰 Valor do item: **R$ 2.000,00**
- ⏳ Uso: **6 meses**
- 🔄 Valor a pagar para renovação: **R$ 1.000,00 por +12 meses**

Dessa forma, cada cliente paga proporcionalmente ao tempo que ainda irá utilizar, garantindo que a negociação seja **justa e organizada**.`
      },
      {
        type: 'text',
        content: `## DICA DE ORGANIZAÇÃO

Para clientes muito bons, monte uma **planilha durante a season** contendo:

- 🏷️ **Nome do Item**
- 💵 **Valor do Item**
- 📆 **Data de aquisição**

Assim, na hora da **call com o cliente**, tudo já estará pronto para o cálculo. A conversa flui rápida, profissional e sem improviso.`
      }
    ]
  },
  {
    id: 'wipe-creditos',
    name: 'Sistema de Créditos',
    group: 'WIPE',
    icon: 'CreditCard',
    order: 18,
    visible: true,
    contentBlocks: [
      {
        type: 'header',
        subtitle: '',
        title: 'Sistema de Créditos',
        text: 'Como o cashback do valor gasto pelos clientes é convertido em créditos na loja após o wipe, de acordo com a data das compras realizadas antes do reset.'
      },
      {
        type: 'grid',
        items: [
          {
            title: 'Últimos 20 dias',
            description: '100% de cashback do valor gasto. Compras realizadas nos 20 dias anteriores ao wipe são convertidas em 100% de créditos na loja.'
          },
          {
            title: 'De 20 à 30 dias',
            description: '50% de cashback do valor gasto. Compras realizadas entre 20 e 30 dias antes do wipe são convertidas em 50% de créditos na loja.'
          },
          {
            title: 'Forma de agradecer',
            description: 'É a nossa forma de agradecer o cliente por continuar com a gente na próxima season.'
          }
        ]
      },
      {
        type: 'alert',
        style: 'success',
        title: 'ÚLTIMOS 20 DIAS | 100% DE CASHBACK',
        content: 'Compras realizadas nos últimos 20 dias antes do wipe serão convertidas em 100% de créditos na loja. Exemplo: compras entre 21/03 e 10/04 = 100% de créditos.'
      },
      {
        type: 'alert',
        title: 'DE 20 À 30 DIAS | 50% DE CASHBACK',
        content: 'Compras realizadas entre 20 e 30 dias antes do wipe serão convertidas em 50% de créditos na loja. Exemplo: compras entre 11/03 e 20/03 = 50% de créditos.'
      },
      {
        type: 'text',
        content: `## COMO FUNCIONA

Após o wipe, o cliente **não perde** o que investiu nos dias anteriores ao reset. Uma parte do valor gasto retorna como **crédito na loja** para ser utilizado na nova season.

A conversão depende de **quando a compra foi feita** em relação à data do wipe:

- 🟢 **Últimos 20 dias antes do wipe** → **100% de cashback** em créditos
- 🟡 **Entre 20 e 30 dias antes do wipe** → **50% de cashback** em créditos
- 🔴 **Mais de 30 dias antes do wipe** → não entra na conversão

## EXEMPLO PRÁTICO

Considerando um wipe no dia **10/04**:

- 🟢 Compras entre **21/03 e 10/04** → convertidas em **100% de créditos** na loja
- 🟡 Compras entre **11/03 e 20/03** → convertidas em **50% de créditos** na loja

É a nossa forma de **agradecer o cliente** por continuar com a gente na próxima season.`
      }
    ]
  },
  {
    id: 'wipe-objecoes',
    name: 'Quebra de Objeções',
    group: 'WIPE',
    icon: 'MessageCircle',
    order: 15.9,
    visible: true,
    contentBlocks: [
      {
        type: 'header',
        subtitle: '',
        title: 'Quebra de Objeções',
        text: 'Como responder com segurança quando o cliente adia a compra alegando que o wipe está próximo.'
      },
      {
        type: 'grid',
        items: [
          {
            title: 'Sem previsão oficial',
            description: 'Nunca existe uma data confirmada de wipe. Não especule, não confirme e não sugira prazos.'
          },
          {
            title: 'Compra sempre valorizada',
            description: 'Se o wipe acontecer, o cliente paga apenas o proporcional para renovar o item na próxima season.'
          },
          {
            title: 'Segurança na resposta',
            description: 'Passe confiança: o investimento nunca é perdido e o tempo de uso sempre é considerado.'
          }
        ]
      },
      {
        type: 'text',
        content: `## ⏳ O QUE MAIS OUVIMOS QUANDO A SEASON JÁ TEM 4 OU 5 MESES

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
- 🤝 Ou seja, o cliente **não será esquecido**, a compra continua sendo valorizada e todo o investimento é levado em consideração.`
      },
      {
        type: 'alert',
        style: 'danger',
        title: '⚠️ REGRA DE OURO',
        content: 'Nunca confirme, especule ou informe uma possível data de wipe. A resposta deve ser sempre:|||não existe nenhuma previsão oficial.'
      }
    ]
  }
];
