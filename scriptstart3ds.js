
// usa o Chrome e sem chance pra phone, mas o brave passa ....
//
function verificaDispositivo() {
  const ua = navigator.userAgent;
  const isChrome = ua.includes("Chrome") && !ua.includes("Edg") && !ua.includes("OPR");

  // celular sem chance
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(ua);

  // responsivo
  const screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  const isSmallScreen = screenWidth < 768; // tela pequena

  if (!isChrome) {
    document.body.innerHTML = "<h2>Use o Google Chrome!.</h2>";
    window.location.replace("nao.html"); // replace()
    return false;
  }

  // tela pequena é celular caraca
  if (isMobile || isSmallScreen) {
    document.body.innerHTML = "<h2> só pc, notebook!!!!!.</h2>";
    // "https://ctrlplay.com.br/"
    window.location.replace("nao.html"); // replace()
    return false;
  }

  return true;
}

//esta bagaca do EmailJS (publicKey )
emailjs.init("2USzg7NVPSVWbunmn");

// --- Programação Mobile ---
const generalQuestions = [
  { text: "Qual é a importância de criar um ícone de aplicação de alta qualidade para as lojas de aplicativos?", options: ["É apenas estético e não afeta a aceitação do app.", "É o primeiro elemento visual que atrai usuários.", "Só é obrigatório para a App Store, mas não para o Google Play.", "É usado apenas em testes beta, não na versão final.", "Usado para testar aplcativos"], correctAnswer: "É o primeiro elemento visual que atrai usuários.", category: "Programação Mobile" },
  { text: "Qual estratégia é mais eficaz para melhorar o tempo de resposta de um aplicativo que apresenta lentidão no carregamento de imagens?", options: ["Implementar compressão de imagens e lazy loading.", "Desabilitar o caching para garantir que sempre sejam carregadas imagens atualizadas.", "Aumentar a resolução das imagens para melhorar a qualidade.", "Carregar todas as imagens simultaneamente na inicialização do app.", "Habilitar cache"], correctAnswer: "Implementar compressão de imagens e lazy loading.", category: "Programação Mobile" },
  { text: "Qual etapa é fundamental na implementação de melhorias baseadas nos feedbacks dos revisores?", options: ["Submeter o app sem checar mudanças.", "Apenas atualizar a documentação, sem alterar o código.", "Realizar testes de regressão e monitorar os resultados das correções.", "Deixar só uma equipe cuidar da melhoria.", "Apenas reiniciar o código"], correctAnswer: "Realizar testes de regressão e monitorar os resultados das correções.", category: "Programação Mobile" },
  { text: "Qual é a principal função dos KPIs (Key Performance Indicators) na análise de campanhas digitais para aplicativos?", options: ["Servir apenas para justificar o orçamento da campanha.", "Medir a eficácia das ações e orientar ajustes para melhorar os resultados.", "Eliminar a necessidade de testes A/B.", "Garantir que todas as campanhas tenham o mesmo desempenho.", "Mediar resultados entre as partes"], correctAnswer: "Medir a eficácia das ações e orientar ajustes para melhorar os resultados.", category: "Programação Mobile" },
  { text: "Qual das seguintes etapas NÃO faz parte de um cronograma de lançamento de aplicativos?", options: ["Planejamento.", "Desenvolvimento de hardware.", "Testes beta.", "Fase de manutenção pós-lançamento.", "Novas implementaçoes"], correctAnswer: "Desenvolvimento de hardware.", category: "Programação Mobile" }
];

// --- Banco de Dados ---
const mathQuestions = [
  { text: "Qual é a principal vantagem de uma arquitetura distribuída em bancos de dados NoSQL para uma empresa global?", options: ["Eliminação completa de falhas de hardware.", "Menor necessidade de infraestrutura e servidores.", "Melhor latência e disponibilidade em várias regiões.", "Maior consistência dos dados em todos os nós.", "Menor escabilidade"], correctAnswer: "Melhor latência e disponibilidade em várias regiões.", category: "Banco de Dados" },
  { text: "Qual comando do Redis é utilizado para verificar se uma chave existe no banco de dados?", options: ["EXISTS", "SET", "DEL", "GET", "PUT"], correctAnswer: "EXISTS", category: "Banco de Dados" },
  { text: "O que é o particionamento de dados no Cassandra?", options: ["O particionamento cria cópias de dados como um clone em todos os nós.", "O particionamento organiza dados exclusivamente por data.", "O particionamento distribui os dados entre os nós com base em uma chave de partição.", "O particionamento distribui os dados de maneira uniforme entre os nós.", "O particionamento distribui os dados hierárquicos"], correctAnswer: "O particionamento distribui os dados entre os nós com base em uma chave de partição.", category: "Banco de Dados" },
  { text: "Qual é a principal diferença entre o backup completo (snapshot) e o backup incremental no Cassandra?", options: ["O primeiro é mais eficiente em termos de espaço, enquanto o incremental é mais demorado.", "O primeiro armazena apenas dados novos, e o incremental captura todos os dados.", "O primeiro é feito manualmente, enquanto o incremental é automático.", "O primeiro captura todos os dados, o segundo, apenas as alterações desde o último backup.", "O primeiro armazrna em lista encadeada"], correctAnswer: "O primeiro captura todos os dados, o segundo, apenas as alterações desde o último backup.", category: "Banco de Dados" },
  { text: "Que a função explain() no MongoDB permite que você faça?", options: ["Explicar o tempo de execução e o plano de execução de uma consulta.", "Exibir todos os dados armazenados em uma coleção.", "Criar índices automaticamente para melhorar o desempenho das consultas.", "Excluir documentos que não atendem aos critérios da consulta.", "Distribuir functions"], correctAnswer: "Explicar o tempo de execução e o plano de execução de uma consulta.", category: "Banco de Dados" }
];

// --- Front-End ---
const geoQuestions = [
  { text: "Por que as APIs são importantes no desenvolvimento de software?", options: ["Porque garantem que todo o sistema seja sempre atualizado automaticamente.", "Porque elas substituem totalmente o código de um sistema.", "Porque permitem adicionar funcionalidades ao sistema sem precisar programar do zero.", "Porque as APIs são ferramentas de design de interface.", "APIs não são importantes para o desenvolvimento do software."], correctAnswer: "Porque permitem adicionar funcionalidades ao sistema sem precisar programar do zero.", category: "Front-End" },
  { text: "Qual é o papel da documentação ao integrar uma API?", options: ["Oferecer suporte para resolver todos os problemas de integração automaticamente.", "Limitar o uso da API para certos usuários.", "Reduzir o tempo de expiração dos tokens de autenticação.", "Facilitar o processo de integração.", "APIs não possuem documentação."], correctAnswer: "Facilitar o processo de integração.", category: "Front-End" },
  { text: "Qual é o papel do Cypress em uma aplicação web?", options: ["Validar o comportamento de elementos da interface ao interagir com o usuário.", "Testar o banco de dados da aplicação.", "Executar apenas testes unitários em JavaScript.", "Testar a lógica de funções e algoritmos do servidor.", "Validar qual a linguagem que o código foi desenvolvido."], correctAnswer: "Validar o comportamento de elementos da interface ao interagir com o usuário.", category: "Front-End" },
  { text: "Qual é a principal vantagem do lazy loading no contexto do desempenho de um site?", options: ["Elimina a necessidade de um servidor local para o funcionamento do site.", "Reduz o consumo de recursos ao carregar conteúdos apenas quando necessários.", "Melhora a estética do site com carregamento progressivo.", "Garante que todos os elementos sejam carregados simultaneamente.", "Não tem nenhuma vantagem."], correctAnswer: "Reduz o consumo de recursos ao carregar conteúdos apenas quando necessários.", category: "Front-End" },
  { text: "Em quais tipos de elementos o lazy loading pode ser mais comumente aplicado?", options: ["Formulários e botões.", "Textos e títulos.", "Imagens e vídeos.", "Scripts JavaScript essenciais para o funcionamento da página.", "Elementos como o CSS color."], correctAnswer: "Imagens e vídeos.", category: "Front-End" }
];

// --- Back-End ---
const othersQuestions = [
  { text: "Qual das seguintes alternativas melhor define o papel das ferramentas de integração em um sistema back-end?", options: ["Abstrair a complexidade das comunicações com serviços externos.", "Aumentar a complexidade do código para maior segurança.", "Elaborar interfaces gráficas para o usuário final.", "Substituir a necessidade de autenticação nas chamadas de API.", "Não é necessário utilizar integrações em um sistema de back-end."], correctAnswer: "Abstrair a complexidade das comunicações com serviços externos.", category: "Back-End" },
  { text: "Em um cenário de integração com serviços externos, qual método de autenticação oferece um mecanismo robusto e escalável?", options: ["Armazenamento de senhas em texto plano.", "Desabilitar autenticação para agilizar a comunicação.", "API Keys para todos os casos.", "JWT (JSON Web Token) para sessões sem estado.", "Elaborar interfaces gráficas para o usuário final."], correctAnswer: "JWT (JSON Web Token) para sessões sem estado.", category: "Back-End" },
  { text: "Qual prática é essencial para garantir que a automação de testes em uma pipeline seja eficaz?", options: ["Utilizar containers para isolar o ambiente de testes.", "Executar testes apenas em produção.", "Executar testes manuais em paralelo à automação.", "Ignorar falhas nos testes unitários.", "Desabilitar autenticação para agilizar a comunicação."], correctAnswer: "Utilizar containers para isolar o ambiente de testes.", category: "Back-End" },
  { text: "Qual é o principal objetivo de configurar HTTPS em um servidor web?", options: ["Permitir o acesso a múltiplas portas.", "Melhorar o desempenho do servidor.", "Reduzir o custo de hospedagem.", "Garantir a comunicação criptografada entre cliente e servidor.", "Não é necessário utilizar o HTTPS."], correctAnswer: "Garantir a comunicação criptografada entre cliente e servidor.", category: "Back-End" },
  { text: "Qual é o principal risco de não aplicar patches de segurança em servidores?", options: ["Perda de dados automaticamente após um tempo.", "Aumento da latência do servidor.", "Dificuldade em monitorar logs de acesso.", "Exposição a vulnerabilidades exploráveis por ataques.", "Nenhuma das anteriores."], correctAnswer: "Exposição a vulnerabilidades exploráveis por ataques.", category: "Back-End" }
];

// --- Projeto Multidisciplinar ---
const multiQuestions = [
  { text: "Qual é o papel mais importante do feedback durante a fase de apresentação do projeto?", options: ["Dar oportunidade para fortalecer a ideia original.", "Confirmar as opções econômicas do projeto.", "Validar a proposta inicial sem necessidade de ajustes.", "Permitir alterações com base nas percepções do público."], correctAnswer: "Permitir alterações com base nas percepções do público.", category: "Projeto Multidisciplinar" },
  { text: "Durante a análise dos indicadores, descobrimos que a taxa de conversão de clientes foi inferior à meta estabelecida. Qual é a melhor ação a ser tomada?", options: ["Interromper coleta de dados para evitar resultados ruins.", "Revisar a estratégia e identificar pontos de melhoria.", "Ignorar os resultados e seguir com o plano original.", "Reduzir a meta exigida para facilitar o alcance.", "Interromper coleta de dados mesmo com informações  que evitem resultados ruins."], correctAnswer: "Revisar a estratégia e identificar pontos de melhoria.", category: "Projeto Multidisciplinar" },
  { text: "Qual estratégia é comum no marketing de relacionamento?", options: ["Utilizar exclusivamente a publicidade em TV.", "Implementar programas de fidelidade e comunicação personalizada.", "Criar campanhas virais sem necessariamente focar um público-alvo.", "Apostar em promoções curtas e expressivas.", "Somente apresentação."], correctAnswer: "Implementar programas de fidelidade e comunicação personalizada.", category: "Projeto Multidisciplinar" },
  { text: "Na perspectiva de clientes/usuários, qual das questões a seguir é a mais adequada para análise?", options: ["Quem seriam os principais beneficiários do projeto?", "Como as tarefas foram distribuídas entre a equipe?", "Qual foi o orçamento inicial do projeto?", "Quais ferramentas foram usadas para a gestão do projeto?", "Qual foi o orçamento final do projeto?"], correctAnswer: "Quem seriam os principais beneficiários do projeto?", category: "Projeto Multidisciplinar" },
  { text: "O que é a projeção vocal em uma apresentação?", options: ["A capacidade de fazer a voz ser ouvida, sem esforço.", "Voz capaz de expressar diversas emoções.", "A habilidade de falar de forma rápida e com clareza.", "A habilidade de aumentar o volume da voz.", "A habilidade de aumentar a frequência  da fala."], correctAnswer: "A capacidade de fazer a voz ser ouvida, sem esforço.", category: "Projeto Multidisciplinar" }
];

// Combinar  
const allQuestions = [...generalQuestions, ...mathQuestions, ...geoQuestions, ...othersQuestions, ...multiQuestions]; // Adiciona multiQuestions ao final

const originalQuestions = [...allQuestions]; // ordem original

// mistura dentro da categ
const shuffledGeneral = [...generalQuestions].sort(() => Math.random() - 0.5);
const shuffledMath = [...mathQuestions].sort(() => Math.random() - 0.5);
const shuffledGeo = [...geoQuestions].sort(() => Math.random() - 0.5);
const shuffledOthers = [...othersQuestions].sort(() => Math.random() - 0.5); // embaralhada
const shuffledMulti = [...multiQuestions].sort(() => Math.random() - 0.5); // Embaralha a nova categoria

const shuffledQuestions = [...shuffledGeneral, ...shuffledMath, ...shuffledGeo, ...shuffledOthers, ...shuffledMulti];


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
  questionDiv.innerHTML = `<strong>(${q.category}) ${q.text}</strong>`; // categoria  

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

// . 5 4 3 2 1......redireciona
function startCountdown() {
    let timeLeft = REDIRECT_TIMEOUT;
    timerMessageDiv.textContent = `Mouse fora do form! Redirecionamento em ${timeLeft} segundos.`;
    timerMessageDiv.style.display = "block"; //mostra

    countdownInterval = setInterval(() => {
        timeLeft--;
        timerMessageDiv.textContent = `Mouse fora do form! Redirecionamento em ${timeLeft} segundos.`;
        if (timeLeft <= 0) {
            clearInterval(countdownInterval);
            window.location.replace(REDIRECT_URL); // replace()
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

  // 10 s  redirect
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

  // agrupar   por categoria
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