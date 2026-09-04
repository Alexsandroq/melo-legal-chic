export const WHATSAPP_NUMBER = "5518000000000";
export const WHATSAPP_MESSAGE =
  "Olá, Fernando. Gostaria de obter informações sobre atendimento jurídico trabalhista.";
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE,
)}`;

export const NAV_LINKS = [
  { label: "Início", href: "#inicio" },
  { label: "Atuação", href: "#atuacao" },
  { label: "Sobre", href: "#sobre" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "FAQ", href: "#faq" },
  { label: "Contato", href: "#contato" },
];

export const PRACTICE_AREAS = [
  {
    number: "01",
    title: "Direito Trabalhista",
    description:
      "Análise de situações relacionadas à relação de emprego, com orientação individualizada sobre direitos e possibilidades jurídicas.",
  },
  {
    number: "02",
    title: "Consultoria Trabalhista",
    description:
      "Acompanhamento preventivo para pessoas e empresas que precisam compreender obrigações e rotinas trabalhistas antes de decidir.",
  },
  {
    number: "03",
    title: "Defesa de Direitos",
    description:
      "Atuação técnica na defesa de direitos decorrentes do contrato de trabalho, sempre com base na análise concreta de cada caso.",
  },
  {
    number: "04",
    title: "Atendimento Personalizado",
    description:
      "Escuta atenta, comunicação clara e acompanhamento próximo em cada etapa da orientação jurídica.",
  },
];

export const PROBLEMS = [
  "Fui demitido e tenho dúvidas sobre meus direitos.",
  "Tenho problemas relacionados ao meu contrato de trabalho.",
  "Preciso entender uma situação trabalhista antes de agir.",
  "Minha empresa precisa de orientação trabalhista.",
];

export const DIFFERENTIALS = [
  { number: "01", title: "Estratégia", text: "Análise cuidadosa de cada situação." },
  { number: "02", title: "Clareza", text: "Explicação objetiva das possibilidades jurídicas." },
  { number: "03", title: "Proximidade", text: "Atendimento próximo e personalizado." },
  {
    number: "04",
    title: "Responsabilidade",
    text: "Atuação pautada pela ética e responsabilidade profissional.",
  },
];

export const PROCESS = [
  { number: "01", title: "Primeiro contato", text: "Você apresenta sua situação." },
  { number: "02", title: "Análise", text: "As informações são avaliadas de forma individual." },
  {
    number: "03",
    title: "Orientação",
    text: "São apresentadas as possibilidades jurídicas aplicáveis.",
  },
  { number: "04", title: "Estratégia", text: "Definição dos próximos passos." },
];

export const FAQS = [
  {
    q: "Como funciona o primeiro contato?",
    a: "O primeiro contato pode ser feito por WhatsApp, telefone ou e-mail. Nele, você apresenta brevemente sua situação para que seja possível avaliar a melhor forma de atendimento.",
  },
  {
    q: "Quais situações trabalhistas podem ser analisadas?",
    a: "Situações relacionadas à relação de emprego, ao contrato de trabalho e a dúvidas sobre direitos e obrigações trabalhistas. Cada caso é analisado de forma individual.",
  },
  {
    q: "Como funciona uma consulta jurídica?",
    a: "Na consulta, as informações e documentos apresentados são analisados e, em seguida, são explicadas as possibilidades jurídicas aplicáveis, sem qualquer promessa de resultado.",
  },
  {
    q: "Atende pessoas físicas e empresas?",
    a: "Sim. O atendimento contempla trabalhadores e empresas que buscam orientação em Direito do Trabalho.",
  },
  {
    q: "Como posso entrar em contato?",
    a: "Pelo botão de WhatsApp disponível no site ou pelos canais informados na seção de contato.",
  },
];
