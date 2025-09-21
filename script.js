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
    window.location.href = "https://ctrlplay.com.br/";
    return false;
  }

  // Novo bloqueio para celular ou tela pequena
  if (isMobile || isSmallScreen) {
    document.body.innerHTML = "<h2>Este formulário deve ser acessado de um computador.</h2>";
    // Você pode redirecionar para uma página específica para celular ou para a página inicial
    window.location.href = "https://ctrlplay.com.br/"; // Ou uma URL de sua escolha
    return false;
  }

  return true;
}

//esta bagaca do EmailJS (publicKey )
emailjs.init("2USzg7NVPSVWbunmn"); 

const questions = [
  { text: "Qual é a capital do Brasil?", options: ["São Paulo", "Rio de Janeiro", "Brasília", "Salvador", "Curitiba"] },
  { text: "Qual é o maior planeta do sistema solar?", options: ["Terra", "Marte", "Júpiter", "Saturno", "Vênus"] },
  { text: "Quem escreveu 'Dom Casmurro'?", options: ["Machado de Assis", "Carlos Drummond", "Clarice Lispector", "Graciliano Ramos", "Jorge Amado"] },
  { text: "Qual é o elemento químico representado por 'O'?", options: ["Ouro", "Oxigênio", "Prata", "Carbono", "Hidrogênio"] },
  { text: "Qual é a cidade da barriga de bola?", options: ["Jacareí", "Taubaté", "Ubatuba", "Cabreúva", "Jundiaí"] },
  { text: "Quantos continentes existem?", options: ["4", "5", "6", "7", "8"] }
];
const originalQuestions = [...questions]; // monha cópia ordem original pra me achar
const shuffledQuestions = [...questions].sort(() => Math.random() - 0.5); // mistura tudo

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
const REDIRECT_URL = "https://ctrlplay.com.br/"; // manda pras crianças
const REDIRECT_TIMEOUT = 10;  

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
  questionDiv.innerHTML = `<strong>${q.text}</strong>`;

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

      const originalIndex = originalQuestions.findIndex(p => p.text === q.text);
      respostas[originalIndex] = opt; 

      nextBtn.style.display = "inline-block";
    };
    questionDiv.appendChild(optDiv);
  });

  quizContainer.appendChild(questionDiv);
}

nextBtn.onclick = () => {
  currentQuestion++;
  if (currentQuestion < questions.length) {
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

//  10 .9 8 7 6 5 4 3 2 1......redireciona
function startCountdown() {
    let timeLeft = REDIRECT_TIMEOUT;
    timerMessageDiv.textContent = `Mouse dentro do form! Redirecionamento em ${timeLeft} segundos.`;
    timerMessageDiv.style.display = "block"; //mostra

    countdownInterval = setInterval(() => {
        timeLeft--;
        timerMessageDiv.textContent = `Mouse dentro do form! Redirecionamento em ${timeLeft} segundos.`;
        if (timeLeft <= 0) {
            clearInterval(countdownInterval);
            window.location.href = REDIRECT_URL; // perdeu playboy
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

  // mostra 10 .9......
  startCountdown();
  
  //  10 s  redirect
  leaveTimer = setTimeout(() => {
    
    window.location.href = REDIRECT_URL;
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
    nome_usuario: userName,
    serie_usuario: userSerie,
    respostas: respostas.map((r, i) => `Q${i + 1}: ${r}`).join("\n")
  };

  emailjs.send("service_goman9p", "template_3k5hl9e", templateParams)
    .then(() => {
      statusDiv.textContent = " Prova enviada! agora vai dormir!...";
      statusDiv.style.color = "green"; // mete um verde
      // manda os caretas dormir depois do form
      setTimeout(() => { 
        window.location.href = "https://www.sleepup.com.br/"; 
      }, 2000); //  
    })
    .catch(() => {     //////exceto........
      statusDiv.textContent = " Erro . Redireciona";
      statusDiv.style.color = "red";
      //  
      setTimeout(() => { 
        window.location.href = "https://www.sleepup.com.br/"; 
      }, 2000); //  
    });
}