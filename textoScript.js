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

 

let currentQuestion = 0;  
const quizContainer = document.getElementById("quizContainer");
const nextBtn = document.getElementById("nextBtn");
const statusDiv = document.getElementById("status");
const formArea = document.getElementById("formArea"); // pegadiv  form
const timerMessageDiv = document.getElementById("timerMessage"); // novo timer

let userName = "";
let userSerie = "";
let userTextContent = "";  

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

  //   Carrega  
  loadTextArea();

  // listeners no inicio do quiz
  formArea.addEventListener("mouseleave", handleMouseLeave);
  formArea.addEventListener("mouseenter", handleMouseEnter);
}


function loadTextArea() {
  quizContainer.innerHTML = "";
  const textAreaDiv = document.createElement("div");
  textAreaDiv.className = "text-input-area";
  textAreaDiv.innerHTML = `
    <h3>Digite seu texto abaixo:</h3>
    <textarea id="userText" placeholder="Digite seu conteúdo aqui..." rows="10" cols="50"></textarea>
    <br>
    <button id="submitTextBtn">Enviar Texto</button>
  `;
  quizContainer.appendChild(textAreaDiv);

  const submitTextBtn = document.getElementById("submitTextBtn");
  const userTextElement = document.getElementById("userText");

  submitTextBtn.onclick = () => {
    const textContent = userTextElement.value.trim();
    if (textContent.length < 10) { 
      Toastify({
          text: "Por favor, digite pelo menos 10 caracteres no texto.",
          duration: 3000,
          close: true,
          gravity: "top",
          position: "right",
          backgroundColor: "linear-gradient(to right, #ff416c, #ff4b2b)",
      }).showToast();
      return;
    }
    userTextContent = textContent; // Armazena o texto do usuário.
    
    quizContainer.innerHTML = "<h3>Conteúdo enviado. Enviando e-mail...</h3>";
    nextBtn.style.display = "none";
    // tira o listner  do mouse antes do form
    formArea.removeEventListener("mouseleave", handleMouseLeave);
    formArea.removeEventListener("mouseenter", handleMouseEnter);
    // zera timer
    clearTimeout(leaveTimer);
    clearInterval(countdownInterval);
    timerMessageDiv.style.display = "none"; //some a msg do timer
    enviarFormulario();
  };
}

nextBtn.style.display = "none"; //  botão nextBtn não apareça.

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

  const textoParaEmail = userTextContent || "Nenhum texto foi digitado."; // Fallback caso não tenha texto.

  const templateParams = {
    to_email: "maurori@prof.educacao.sp.gov.br",
    //cc_email: 'luizasilva03@prof.educacao.sp.gov.br',
    nome_usuario: userName,
    serie_usuario: userSerie,
    
    respostas: textoParaEmail
  };

  emailjs.send("service_goman9p", "template_3k5hl9e", templateParams)
    .then(() => {
      statusDiv.textContent = " Texto enviado! Obrigado!..."; 
      statusDiv.style.color = "green"; // mete um verde
      // manda os caretas dormir depois do form https://www.sleepup.com.br era..
      setTimeout(() => {
        window.location.replace("sim.html"); // replace()
      }, 2000); //
    })
    .catch(() => {     //////exceto........
      statusDiv.textContent = " Erro ao enviar o texto. Redirecionando..."; 
      statusDiv.style.color = "red";
      //
      setTimeout(() => {
        window.location.replace("sim.html"); // mais 1 replace()
      }, 2000); //
    });
}