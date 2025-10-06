import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

// Firebase
const firebaseConfig = {
    apiKey: "AIzaSyD5jQFu1xmj9LaqVBmfLNmzuRA0Z65eDa4",
    authDomain: "qualitynf-75962.firebaseapp.com",
    projectId: "qualitynf-75962",
    storageBucket: "qualitynf-75962.firebasestorage.app",
    messagingSenderId: "939095328941",
    appId: "1:939095328941:web:bd7e6862dcad4df7f19e24"
};

// start 
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // get instance

document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const messageDisplay = document.getElementById('message');

    //  
    function showMessage(text, type, duration = 3000) { //  3sec)
        messageDisplay.textContent = text;
        messageDisplay.className = `message ${type}`; 

        // clear
        setTimeout(() => {
            messageDisplay.textContent = '';
            messageDisplay.className = 'message'; // back to styles
        }, duration);
    }

    loginForm.addEventListener('submit', async (event) => {
        event.preventDefault(); 

        const enteredEmail = emailInput.value;
        const enteredPassword = passwordInput.value;

        // clear 2
        messageDisplay.textContent = '';
        messageDisplay.className = 'message'; 

        if (!enteredEmail || !enteredPassword) {
            showMessage('Por favor, insira email e senha.', 'error');
            return;
        }

        try {
            await signInWithEmailAndPassword(auth, enteredEmail, enteredPassword);
            showMessage(' OK', 'success');
            console.log('ok');
            
            // redirect after 3s
             
            setTimeout(() => {
                window.location.href = 'sim.html'; 
            }, 3000); 
            
        } catch (error) {
            let errorMessage = "unknow error try...";
            if (error.code) {
                switch (error.code) {
                    case 'auth/invalid-credential': 
                        errorMessage = ' contact sumidoghost@gmail.com';
                        break;
                    case 'auth/user-not-found':
                    case 'auth/wrong-password':
                        errorMessage = 'email or pass wrong.';
                        break;
                    case 'auth/invalid-email':
                        errorMessage = ' abcd@dominio.com';
                        break;
                    case 'auth/user-disabled':
                        errorMessage = 'no way.';
                        break;
                    case 'auth/network-request-failed':
                        errorMessage = 'connection wrong try....';
                        break;
                    default:
                        errorMessage = `path error: ${error.message}`;
                        break;
                }
            }
            showMessage(errorMessage, 'error');
            console.error('path error', error);
        }

        passwordInput.value = ''; 
    });
});