document.addEventListener('DOMContentLoaded', () => {
    const copyButton = document.getElementById("copy-email");
    const feedback = document.getElementById("copy-feedback");
    const email = 'Arthurdiasolivera242@gmail.com'; 
    copyButton.addEventListener('click', () => {
       
        const tempInput = document.createElement('input');
        tempInput.value = email;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand('copy');
        document.body.removeChild(tempInput);

        
        feedback.style.display = 'block';
        setTimeout(() => {
            feedback.style.display = 'none';
        }, 2000); 
    });
});
const menuIcon = document.getElementById('menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('active');
});
// script.js
document.addEventListener('DOMContentLoaded', () => {
    const typingText = document.getElementById('typing-text');
    const textArray = ['Desenvolvedor Web|', 'Cientista de Dados|', 'Entusiasta da Tecnologia|'];
    const typingDelay = 100; // tempo em milissegundos para digitar um caractere
    const erasingDelay = 50;  // tempo em milissegundos para apagar um caractere
    const newTextDelay = 1500; // tempo em milissegundos entre a troca de textos
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
        const currentText = textArray[textIndex];
        if (isDeleting) {
            typingText.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typingText.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
        }

        if (!isDeleting && charIndex === currentText.length) {
            isDeleting = true;
            setTimeout(type, newTextDelay); // Atraso antes de começar a apagar
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % textArray.length;
            setTimeout(type, typingDelay); // Atraso antes de começar a digitar o próximo texto
        } else {
            const delay = isDeleting ? erasingDelay : typingDelay;
            setTimeout(type, delay);
        }
    }

    type(); // Inicia o efeito
});

