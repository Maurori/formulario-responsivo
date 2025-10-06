// usa o Chrome e sem chance pra phone, mas o brave passa ....
//
function verificaDispositivo() {
  const ua = navigator.userAgent;
  const isChrome = ua.includes("Chrome") && !ua.includes("Edg") && !ua.includes("OPR");

  // Verifica se é um dispositivo móvel (Android, iOS, Windows Phone)
  // Pode ser mais abrangente, mas estes são os mais comuns
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(ua);

  // Considera também a largura da tela para casos de tablets ou emuladores
  // Um limite comum para "desktop" seria acima de ~768px ou ~1024px
  const screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  const isSmallScreen = screenWidth < 768; // Exemplo: considera "pequena" se for menor que 768px de largura

  if (!isChrome) {
    document.body.innerHTML = "<h2>Use o Google Chrome!.</h2>";
    window.location.replace("nao.html"); // Alterado para replace()
    return false;
  }

  // Novo bloqueio para celular ou tela pequena
  if (isMobile || isSmallScreen) {
    document.body.innerHTML = "<h2> só pc, notebook!!!!!.</h2>";
    // Você pode redirecionar "https://ctrlplay.com.br/"
    window.location.replace("nao.html"); // Alterado para replace()
    return false;
  }

  return true;
}

//esta bagaca do EmailJS (publicKey )
emailjs.init("2USzg7NVPSVWbunmn");

// --- PERGUNTAS DE CONHECIMENTOS GERAIS ---
const generalQuestions = [
  { text: "Qual é a capital do Brasil?", options: ["São Paulo", "Rio de Janeiro", "Brasília", "Salvador", "Curitiba"], category: "Geral" },
  { text: "Qual é o maior planeta do sistema solar?", options: ["Terra", "Marte", "Júpiter", "Saturno", "Vênus"], category: "Geral" },
  { text: "Quem escreveu 'Dom Casmurro'?", options: ["Machado de Assis", "Carlos Drummond", "Clarice Lispector", "Graciliano Ramos", "Jorge Amado"], category: "Geral" },
  { text: "Qual é o elemento químico representado por 'O'?", options: ["Ouro", "Oxigênio", "Prata", "Carbono", "Hidrogênio"], category: "Geral" },
  { text: "Qual é a cidade da barriga de bola?", options: ["Jacareí", "Taubaté", "Ubatuba", "Cabreúva", "Jundiaí"], category: "Geral" },
  { text: "Quantos continentes existem?", options: ["4", "5", "6", "7", "8"], category: "Geral" }
];

// --- NOVAS PERGUNTAS DE MATEMÁTICA ---
const mathQuestions = [
  { text: "Quanto é 7 x 8?", options: ["49", "56", "64", "72", "81"], category: "Matemática" },
  { text: "Qual o resultado de 15 + 23?", options: ["35", "38", "40", "43", "36"], category: "Matemática" },
  { text: "Se x = 5, quanto é 2x + 3?", options: ["10", "12", "13", "15", "18"], category: "Matemática" },
  { text: "Qual a raiz quadrada de 81?", options: ["7", "8", "9", "10", "6"], category: "Matemática" },
  { text: "Quanto é 120 dividido por 3?", options: ["30", "35", "40", "45", "50"], category: "Matemática" }
];

// --- NOVAS PERGUNTAS DE GEOGRAFIA ---
const geoQuestions = [
  { text: "Qual é o rio mais longo do mundo?", options: ["Amazonas", "Nilo", "Yangtzé", "Mississippi", "Paraná"], category: "Geografia" },
  { text: "Qual o continente mais populoso?", options: ["África", "América", "Europa", "Ásia", "Oceania"], category: "Geografia" },
  { text: "Qual o deserto mais extenso do mundo?", options: ["Saara", "Atacama", "Gobi", "Kalahari", "Arábia"], category: "Geografia" },
  { text: "Qual a capital da França?", options: ["Berlim", "Roma", "Madri", "Paris", "Londres"], category: "Geografia" },
  { text: "Qual oceano banha a costa leste do Brasil?", options: ["Pacífico", "Índico", "Atlântico", "Antártico", "Ártico"], category: "Geografia" }
];

// Combinar todas as perguntas na ordem desejada para o quiz (Geral, Matemática, Geografia)
const allQuestions = [...generalQuestions, ...mathQuestions, ...geoQuestions];

const originalQuestions = [...allQuestions]; // Cópia da ordem original para referência no e-mail

// Misturar as perguntas DENTRO de cada categoria e depois concatená-las
const shuffledGeneral = [...generalQuestions].sort(() => Math.random() - 0.5);
const shuffledMath = [...mathQuestions].sort(() => Math.random() - 0.5);
const shuffledGeo = [...geoQuestions].sort(() => Math.random() - 0.5);

const shuffledQuestions = [...shuffledGeneral, ...shuffledMath, ...shuffledGeo]; // Agora as categorias estão em ordem, e as perguntas dentro delas, embaralhadas.


let currentQuestion = 0;
const respostas = [];
const quizContainer = document.getElementById("quizContainer");
const nextBtn = document.getElementById("nextBtn");
const statusDiv = document.getElementById("status");
const formArea = document.getElementById("formArea"); // pega a divisao  form
const timerMessageDiv = document.getElementById("timerMessage"); // novo timer

let userName = "";
let userSerie = "";

// Var do ID timer inicial
let leaveTimer = null;
// Var  do timer
let countdownInterval = null;
const REDIRECT_URL = "nao.html"; // manda pras crianças
const REDIRECT_TIMEOUT = 5;

document.addEventListener("contextmenu", e => e.preventDefault());
document.addEventListener("keydown", function (e) {
  // F12  sem dev tools
  if (e.key === "F12" || e.keyCode === 123) {
    e.preventDefault();
  }
  // Ctrl Shift I sem inspecionar o elemento
  if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === "i") {
    e.preventDefault();
  }
  // Ctrl U fonte nem a pau
  if (e.ctrlKey && e.key.toLowerCase() === "u") {
    e.preventDefault();
  }
  // Ctrl + Shift + J DevTools  mas não pega tudo o Brave passa até avião firefox nao testei
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
  questionDiv.innerHTML = `<strong>(${q.category}) ${q.text}</strong>`; // Mostra a categoria da pergunta

  // zoa a ordem das perguntas
  const shuffledOptions = [...q.options].sort(() => Math.random() - 0.5);

  shuffledOptions.forEach((opt, i) => { //pega embaralhado
    const optDiv = document.createElement("div");
    optDiv.className = "option";
    optDiv.textContent = `${String.fromCharCode(97 + i)}) ${opt}`;

    optDiv.onclick = () => {
      document.querySelectorAll(".option").forEach(el => {
        el.classList.add("disabled");
        el.classList.remove("selected");
      });
      optDiv.classList.add("selected");

      // Encontra o índice da pergunta no array original para salvar a resposta corretamente
      // Isso é crucial para que as respostas sejam salvas na ordem correta, independente do embaralhamento de exibição
      const originalIndex = originalQuestions.findIndex(p => p.text === q.text && p.category === q.category);
      if (originalIndex !== -1) {
        respostas[originalIndex] = opt;
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
  if (currentQuestion < shuffledQuestions.length) { // Usa shuffledQuestions.length
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
            window.location.replace(REDIRECT_URL); // ALTERAÇÃO AQUI: usa replace()
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

    window.location.replace(REDIRECT_URL); // ALTERAÇÃO AQUI: usa replace()
  }, REDIRECT_TIMEOUT * 1000);
}

// quando o mouse entra
function handleMouseEnter() {
  // controle do timer
  if (leaveTimer) {
    clearTimeout(leaveTimer);
    leaveTimer = null;
  }
  // para se entrar...
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

  const templateParams = {
    to_email: "maurori@prof.educacao.sp.gov.br",
    //cc_email: 'luizasilva03@prof.educacao.sp.gov.br',
    nome_usuario: userName,
    serie_usuario: userSerie,
    // Mapeia as respostas usando as perguntas originais para incluir a categoria no e-mail
    respostas: originalQuestions.map((q, i) => {
        const respostaUsuario = respostas[i] || 'Não respondida';
        return `(${q.category}) ${q.text} -> Resposta: ${respostaUsuario}`;
    }).join("\n")
  };

  emailjs.send("service_goman9p", "template_3k5hl9e", templateParams)
    .then(() => {
      statusDiv.textContent = " Prova enviada! obrigado!...";
      statusDiv.style.color = "green"; // mete um verde
      // manda os caretas dormir depois do form https://www.sleepup.com.br era..
      setTimeout(() => {
        window.location.replace("sim.html"); // ALTERAÇÃO AQUI: usa replace()
      }, 2000); //
    })
    .catch(() => {     //////exceto........
      statusDiv.textContent = " Erro . Redireciona";
      statusDiv.style.color = "red";
      //
      setTimeout(() => {
        window.location.replace("sim.html"); // ALTERAÇÃO AQUI: usa replace()
      }, 2000); //
    });
}