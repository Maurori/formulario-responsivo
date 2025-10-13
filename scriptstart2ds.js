// usa o Chrome e sem chance pra phone, mas o brave passa ....
//
function verificaDispositivo() {
  const ua = navigator.userAgent;
  const isChrome = ua.includes("Chrome") && !ua.includes("Edg") && !ua.includes("OPR");

  // celular sem chance
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(ua);

  // responsivo
  const screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  const isSmallScreen = screenWidth < 768; // Exemplo: considera "pequena" se for menor que 768px de largura

  if (!isChrome) {
    document.body.innerHTML = "<h2>Use o Google Chrome!.</h2>";
    window.location.replace("nao.html"); //  replace()
    return false;
  }

  // tela pequena é celular caraca
  if (isMobile || isSmallScreen) {
    document.body.innerHTML = "<h2> só pc, notebook!!!!!.</h2>";
    //  "https://ctrlplay.com.br/"
    window.location.replace("nao.html"); // replace()
    return false;
  }

  return true;
}

//esta bagaca do EmailJS (publicKey )
emailjs.init("2USzg7NVPSVWbunmn");

// ---Redes ---
const generalQuestions = [
  { text: "Qual é a definição de dados pessoais de acordo com a LGPD?", options: ["Informações relacionadas a uma pessoa identificada ou identificável", "Informações sensíveis que não podem ser compartilhadas", "Informações relacionadas à empresa ou organização", "Informações não relacionadas a uma pessoa identificável", "Informações relacionadas a uma pessoa não identificável"], correctAnswer: "Informações relacionadas a uma pessoa identificada ou identificável", category: "Redes" },
  { text: "O que é disponibilidade em arquitetura de sistemas?", options: ["Capacidade de aumentar ou diminuir recursos conforme necessário", "Capacidade de estar acessível e operacional quando necessário", "Capacidade de automatizar processos de desenvolvimento", "Capacidade de lidar com picos de tráfego", "Capacidade de aumentar os caracteres das senhas quando necessário"], correctAnswer: "Capacidade de estar acessível e operacional quando necessário", category: "Redes" },
  { text: "Qual é o objetivo da escalabilidade em sistemas na nuvem?", options: ["Minimizar o tempo de inatividade não planejado", "Automatizar processos de desenvolvimento", "Garantir alta segurança dos dados armazenados", "Lidar com variações na demanda, aumentando ou diminuindo recursos conforme necessário", "Aumentar o tempo de inatividade não planejado"], correctAnswer: "Lidar com variações na demanda, aumentando ou diminuindo recursos conforme necessário", category: "Redes" },
  { text: "Qual é uma das vantagens da computação em nuvem em comparação com a configuração de um data center físico?", options: ["Menor flexibilidade na escalabilidade dos recursos", "Maior custo com a compra de hardware e software", "Automatizar processos de desenvolvimento", "Velocidade de provisionamento de recursos em minutos", "Minimiza o tempo de inatividade não planejado"], correctAnswer: "Velocidade de provisionamento de recursos em minutos", category: "Redes" },
  { text: "O que é considerado tratamento de dados de acordo com a LGPD?", options: ["Coleta de dados sem consentimento explícito", "Apenas a modificação de dados", "Qualquer operação realizada com dados pessoais", "Armazenamento de dados em um único local", "Armazenamento de dados em diferentes datacenters"], correctAnswer: "Qualquer operação realizada com dados pessoais", category: "Redes" }
];

// --- Logica e LP ---
const mathQuestions = [
  { text: "O que é uma matriz?", options: ["Uma coleção de números dispostos em linhas e colunas formando uma estrutura retangular", "Uma função matemática que transforma espaços", "Uma operação matemática que soma duas formas", "Um tipo específico de variável em programação", "São listas que armazenam diferentes dados"], correctAnswer: "Uma coleção de números dispostos em linhas e colunas formando uma estrutura retangular", category: "Lógica e LP" },
  { text: "Como você acessaria o elemento em uma matriz localizado na segunda linha e terceira coluna?", options: ["matriz[3][2]", "matriz[2][1]", "matriz[2][3]", "matriz[1][2]", "matriz[5][4]"], correctAnswer: "matriz[1][2]", category: "Lógica e LP" },
  { text: "Qual é a diferença principal entre um loop For e um loop While em Python?", options: ["Loop for: número de iterações conhecido; loop While: condição de término desconhecida", "Não há diferença; ambos são usados de forma intercambiável", "Loop While: iterar sobre uma sequência; loop For: condições indefinidas", "Loop for: sempre executa pelo menos uma vez; loop While: pode nunca ser executado", "Loop for: vetores não determinados; loop While: pode nunca ser executado"], correctAnswer: "Loop for: número de iterações conhecido; loop While: condição de término desconhecida", category: "Lógica e LP" },
  { text: "Qual é a principal diferença entre listas e dicionários em Python?", options: ["Listas podem crescer e encolher dinamicamente, enquanto dicionários têm tamanho fixo", "Listas são indexadas por números inteiros, enquanto dicionários são indexados por chaves únicas", "Dicionários permitem valores duplicados, enquanto listas não permitem", "Listas armazenam pares chave-valor, enquanto dicionários armazenam apenas valores", "Listas não são indexadas e dicionários possuem somente números reais"], correctAnswer: "Listas são indexadas por números inteiros, enquanto dicionários são indexados por chaves únicas", category: "Lógica e LP" },
  { text: "Como os elementos dentro de uma matriz são acessados?", options: ["Usando uma combinação de linha e coluna", "Por meio de um índice único que mapeia toda a matriz", "Utilizando métodos especiais de pesquisa de texto", "Matrizes não garantem acesso direto a elementos individuais", "Matrizes garantem acesso direto a elementos individuais"], correctAnswer: "Usando uma combinação de linha e coluna", category: "Lógica e LP" }
];

// --- Metodologia Ageis ---
const geoQuestions = [
  { text: "Qual das seguintes convicções NÃO é um dos 12 princípios do manifesto ágil?", options: ["Colaboração com o cliente acima de negociações", "Priorizar software funcional sobre documentação detalhada", "Plano fixo e imutável", "Interações acima de processos e ferramentas", "Negociar primeiro, pois pode ser plano imposs[ivel"], correctAnswer: "Plano fixo e imutável", category: "Metodologias Ágeis" },
  { text: "Qual é um dos princípios fundamentais do manifesto ágil?", options: ["Aderir estritamente aos processos e ferramentas especificados", "Negociar contratos detalhados com os clientes", "Seguir um plano rigoroso e inflexível", "Responder a mudanças mais do que seguir um plano", "Mudar os planos independente se o que o cliente pediu est[a errado"], correctAnswer: "Responder a mudanças mais do que seguir um plano", category: "Metodologias Ágeis" },
  { text: "Como as mudanças no escopo do projeto são geralmente tratadas em um mindset em cascata?", options: ["São discutidas em reunião diária de stand-up", "Podem ser feitas a qualquer momento sem impactar os recursos disponíveis", "São facilmente incorporadas sem afetar o cronograma", "São difíceis de serem implementadas após o início da execução.", "Em qualquer lugar"], correctAnswer: "São difíceis de serem implementadas após o início da execução.", category: "Metodologias Ágeis" },
  { text: "Qual é o objetivo do Money for Nothing and Changes for Free em contratos ágeis?", options: ["Facilitar mudanças no escopo do projeto sem custos adicionais", "Permitir cancelar o projeto sem custo", "Garantir recompensa ao fornecedor mesmo se cancelado", "Minimizar risco para o cliente, permitindo cancelamento a qualquer momento.", "Monetizar a qualquer custo"], correctAnswer: "Minimizar risco para o cliente, permitindo cancelamento a qualquer momento.", category: "Metodologias Ágeis" },
  { text: "Quem é responsável por priorizar o backlog do produto em um projeto ágil?", options: ["O Product Owner", "O time de desenvolvimento", "Os stakeholders", "O Scrum Master", "O desenvolvedor de back-end"], correctAnswer: "O Product Owner", category: "Metodologias Ágeis" }
];

// --- Carreiras ---
const othersQuestions = [
  { text: "Qual é o modelo de entrevista que oferece maior autonomia ao recrutador para conduzir a entrevista de acordo com a situação e o perfil do candidato?", options: ["Entrevista comportamental", "Entrevista estruturada", "Entrevista semiestruturada", "Entrevista não estruturada", "Entrevista home office"], correctAnswer: "Entrevista não estruturada", category: "Carreiras" },
  { text: "Qual é o objetivo principal do método OKR?", options: ["Aumentar a complexidade das operações de uma empresa", "Estabelecer objetivos claros e mensuráveis, apoiados por resultados-chave", "Implementar tecnologias avançadas de inteligência artificial", "Definir metas genéricas para uma organização", "Permitir que o entrevistado use de abordagens diferentes"], correctAnswer: "Estabelecer objetivos claros e mensuráveis, apoiados por resultados-chave", category: "Carreiras" },
  { text: "O marketing é muito importante para o planejamento da empresa. Um dos equívocos é pensar que marketing é:", options: ["Disseminar", "Divulgar", "Vender", "Promover", "Publicar"], correctAnswer: "Vender", category: "Carreiras" },
  { text: "O que constitui a rede secundária de networking?", options: ["Apenas familiares e amigos", "Colegas de trabalho e contatos profissionais adquiridos", "presencialmente e on-line", "Apenas pessoas de destaque na sua área de atuação", "Apenas clientes e fornecedores"], correctAnswer: "Colegas de trabalho e contatos profissionais adquiridos", category: "Carreiras" },
  { text: "Qual é o principal objetivo das dinâmicas de grupo em equipes de trabalho já formadas?", options: ["Melhorar a comunicação e a colaboração entre os membros da equipe", "Enfatizar as falhas individuais dos membros da equipe", "Aumentar a carga de trabalho dos funcionários", "Reduzir o tempo de descanso dos funcionários", "Corrigir apenas as falhas individuais"], correctAnswer: "Melhorar a comunicação e a colaboração entre os membros da equipe", category: "Carreiras" }
];

// Combinar  
const allQuestions = [...generalQuestions, ...mathQuestions, ...geoQuestions, ...othersQuestions];

const originalQuestions = [...allQuestions]; // ordem original

// mistura dentro da categ
const shuffledGeneral = [...generalQuestions].sort(() => Math.random() - 0.5);
const shuffledMath = [...mathQuestions].sort(() => Math.random() - 0.5);
const shuffledGeo = [...geoQuestions].sort(() => Math.random() - 0.5);
const shuffledOthers = [...othersQuestions].sort(() => Math.random() - 0.5); //  embaralhada

const shuffledQuestions = [...shuffledGeneral, ...shuffledMath, ...shuffledGeo, ...shuffledOthers];


let currentQuestion = 0;
const respostas = [];
const quizContainer = document.getElementById("quizContainer");
const nextBtn = document.getElementById("nextBtn");
const statusDiv = document.getElementById("status");
const formArea = document.getElementById("formArea"); // pegadiv  form
const timerMessageDiv = document.getElementById("timerMessage"); // novo timer

let userName = "";
let userSerie = "";

// var id
let leaveTimer = null;

let countdownInterval = null;
const REDIRECT_URL = "nao.html"; // pros manes
const REDIRECT_TIMEOUT = 5;

document.addEventListener("contextmenu", e => e.preventDefault());
document.addEventListener("keydown", function (e) {
  // F12  sem dev tools
  if (e.key === "F12" || e.keyCode === 123) {
    e.preventDefault();
  }
  // Ctrl Shift I
  if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === "i") {
    e.preventDefault();
  }
  // Ctrl U fonte nem a pau
  if (e.ctrlKey && e.key.toLowerCase() === "u") {
    e.preventDefault();
  }
  // Ctrl + Shift + J DevTools  mas não pega tudo o ap do Brave passa até avião firefox nao testei
  if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === "j") {
    e.preventDefault();
  }
});

function iniciarQuiz() {
  const inputName = document.getElementById("userName");
  const inputSerie = document.getElementById("userSerie");

  const nome = inputName.value.trim();
  const serie = inputSerie.value.trim();

  if (nome.length < 7) {
    Toastify({
        text: "Por favor, digite um nome com pelo menos 7 caracteres.",
        duration: 3000,
        close: true,
        gravity: "top",
        position: "right",
        backgroundColor: "linear-gradient(to right, #ff416c, #ff4b2b)",
    }).showToast();
    return;
  }
  if (serie.length < 2) {
    Toastify({
        text: "Por favor, digite uma série com pelo menos 2 caracteres.",
        duration: 3000,
        close: true,
        gravity: "top",
        position: "right",
        backgroundColor: "linear-gradient(to right, #ff416c, #ff4b2b)",
    }).showToast();
    return;
  }

  userName = nome;
  userSerie = serie;
  inputName.style.display = "none";
  inputSerie.style.display = "none";
  document.querySelector("button[onclick='iniciarQuiz()']").style.display = "none";
  document.getElementById("quizContainer").style.display = "block";
  nextBtn.style.display = "block"; // força o botão
  loadQuestion(currentQuestion);

  // listeners no inicio do quiz
  formArea.addEventListener("mouseleave", handleMouseLeave);
  formArea.addEventListener("mouseenter", handleMouseEnter);
}

function loadQuestion(index) {
  quizContainer.innerHTML = "";
  nextBtn.style.display = "none";

  const q = shuffledQuestions[index];
  const questionDiv = document.createElement("div");
  questionDiv.className = "question";
  questionDiv.innerHTML = `<strong>(${q.category}) ${q.text}</strong>`; //   categoria  

  // zoa a ordem das perguntas
  const shuffledOptions = [...q.options].sort(() => Math.random() - 0.5);

  shuffledOptions.forEach((opt, i) => { //pega embaralhado
    const optDiv = document.createElement("div");
    optDiv.className = "option";
    // tira os montes de   a-) b c d e 
    const cleanedOpt = opt.startsWith("a-)") || opt.startsWith("b-)") || opt.startsWith("c-)") || opt.startsWith("d-)") || opt.startsWith("e-)")
                       ? opt.substring(3).trim()
                       : opt.trim();
    optDiv.textContent = `${String.fromCharCode(97 + i)}) ${cleanedOpt}`;


    optDiv.onclick = () => {
      document.querySelectorAll(".option").forEach(el => {
        el.classList.add("disabled");
        el.classList.remove("selected");
      });
      optDiv.classList.add("selected");

      const originalIndex = originalQuestions.findIndex(p => p.text === q.text && p.category === q.category);
      if (originalIndex !== -1) {
        // Armazena a opção  
        respostas[originalIndex] = cleanedOpt;
      } else {
        console.warn("Pergunta não encontrada no array original:", q.text);
      }

      nextBtn.style.display = "inline-block";
    };
    questionDiv.appendChild(optDiv);
  });

  quizContainer.appendChild(questionDiv);
}

nextBtn.onclick = () => {
  currentQuestion++;
  if (currentQuestion < shuffledQuestions.length) {
    loadQuestion(currentQuestion);
  } else {
    quizContainer.innerHTML = "<h3>Formulário concluído. Enviando...</h3>";
    nextBtn.style.display = "none";
    // tira o listner  do mouse antes do form
    formArea.removeEventListener("mouseleave", handleMouseLeave);
    formArea.removeEventListener("mouseenter", handleMouseEnter);
    // zera timer
    clearTimeout(leaveTimer);
    clearInterval(countdownInterval);
    timerMessageDiv.style.display = "none"; //some a msg do timer
    enviarFormulario();
  }
};

//  . 5 4 3 2 1......redireciona
function startCountdown() {
    let timeLeft = REDIRECT_TIMEOUT;
    timerMessageDiv.textContent = `Mouse fora do form! Redirecionamento em ${timeLeft} segundos.`;
    timerMessageDiv.style.display = "block"; //mostra

    countdownInterval = setInterval(() => {
        timeLeft--;
        timerMessageDiv.textContent = `Mouse fora do form! Redirecionamento em ${timeLeft} segundos.`;
        if (timeLeft <= 0) {
            clearInterval(countdownInterval);
            window.location.replace(REDIRECT_URL); //  replace()
        }
    }, 1000); // 10 s
}

// timer
function stopCountdown() {
    clearInterval(countdownInterval); //
    countdownInterval = null; // Zera a variável
    timerMessageDiv.style.display = "none"; //
}

// quando sai o mouse
function handleMouseLeave() {

  if (leaveTimer) clearTimeout(leaveTimer);
  if (countdownInterval) clearInterval(countdownInterval);

  // mostra 10 .9...... era 10 virou 5
  startCountdown();

  //  10 s  redirect
  leaveTimer = setTimeout(() => {

    window.location.replace(REDIRECT_URL); // usa replace()
  }, REDIRECT_TIMEOUT * 1000);
}

// quando o mouse entra
function handleMouseEnter() {
  // controle do timer
  if (leaveTimer) {
    clearTimeout(leaveTimer);
    leaveTimer = null;
  }
  // para se entrar.......
  if (countdownInterval) {
    stopCountdown();
  }
}

function enviarFormulario() {
  // zera os listener
  if (leaveTimer) clearTimeout(leaveTimer);
  if (countdownInterval) clearInterval(countdownInterval);
  formArea.removeEventListener("mouseleave", handleMouseLeave);
  formArea.removeEventListener("mouseenter", handleMouseEnter);
  timerMessageDiv.style.display = "none"; // nonenenenenenenone

  //  agrupar   por categoria
  const respostasPorCategoria = {};
  const corretasPorCategoria = {}; //   contar as corretas

  originalQuestions.forEach((q, i) => {
    let respostaUsuario = respostas[i] || 'Não respondida';
    let status = '';
    let isCorrect = false;

    if (q.correctAnswer && respostaUsuario.trim() === q.correctAnswer.trim()) {
        status = ' (Correta)';
        isCorrect = true;
    } else if (respostaUsuario !== 'Não respondida') {
        status = ' (Incorreta)';
    }

    const textoResposta = `${q.text} -> Resposta: ${respostaUsuario}${status}`;

    if (!respostasPorCategoria[q.category]) {
      respostasPorCategoria[q.category] = [];
      corretasPorCategoria[q.category] = 0; // nova categoria
    }
    respostasPorCategoria[q.category].push(textoResposta);

    if (isCorrect) {
      corretasPorCategoria[q.category]++; // Incrementa 
    }
  });

  //  string
  let respostasFormatadas = "";
  for (const category in respostasPorCategoria) {
    if (respostasPorCategoria.hasOwnProperty(category)) {
      const totalCorretas = corretasPorCategoria[category] || 0;
      respostasFormatadas += `\n--- ${category.toUpperCase()} (Corretas: ${totalCorretas}) ---\n`; //  contagem
      respostasFormatadas += respostasPorCategoria[category].join("\n");
      respostasFormatadas += "\n"; // Adiciona uma linha em branco 
    }
  }


  const templateParams = {
    to_email: "maurori@prof.educacao.sp.gov.br",
    //cc_email: 'luizasilva03@prof.educacao.sp.gov.br',
    nome_usuario: userName,
    serie_usuario: userSerie,
    respostas: respostasFormatadas // respostas no formatto
  };

  emailjs.send("service_goman9p", "template_3k5hl9e", templateParams)
    .then(() => {
      statusDiv.textContent = " Prova enviada! obrigado!...";
      statusDiv.style.color = "green"; // mete um verde
      // manda os caretas dormir depois do form https://www.sleepup.com.br era..
      setTimeout(() => {
        window.location.replace("sim.html"); // replace()
      }, 2000); //
    })
    .catch(() => {     //////exceto........
      statusDiv.textContent = " Erro . Redireciona";
      statusDiv.style.color = "red";
      //
      setTimeout(() => {
        window.location.replace("sim.html"); // mais 1 replace()
      }, 2000); //
    });
}