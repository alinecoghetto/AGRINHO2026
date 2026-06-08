document.addEventListener("DOMContentLoaded", function() {
    
    // --- 1. CONTROLE DO MENU RESPONSIVO ---
    const menuToggle = document.getElementById("menuToggle");
    const navMenu = document.getElementById("navMenu");

    menuToggle.addEventListener("click", function() {
        navMenu.classList.toggle("active");
    });

    // Fecha o menu automaticamente ao clicar em qualquer item (melhor experiência em Mobile)
    const linksNavegacao = document.querySelectorAll(".nav-menu a");
    linksNavegacao.forEach(link => {
        link.addEventListener("click", () => {
            navMenu.classList.remove("active");
        });
    });

    // --- 2. GERENCIADOR DO FORMULÁRIO DE CONTATO (ESTILO POSTAL) ---
    const contactForm = document.getElementById("contactForm");
    const formFeedback = document.getElementById("formFeedback");

    contactForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Evita o recarregamento padrão do navegador

        // Resgata os valores coletados
        const nome = document.getElementById("nome").value;
        const email = document.getElementById("email").value;

        // Exibe feedback dinâmico na tela
        formFeedback.textContent = `Obrigado pelo contato, ${nome}! Sua mensagem sobre sustentabilidade foi recebida com sucesso.`;
        formFeedback.classList.remove("hidden");

        // Limpa os campos do formulário pós-envio
        contactForm.reset();

        // Remove a mensagem após 5 segundos automaticamente
        setTimeout(() => {
            formFeedback.classList.add("hidden");
        }, 5000);
    });
});

// --- 3. SISTEMA DE VERIFICAÇÃO DO QUIZ INTERATIVO ---
function verificarResposta(isCorrect) {
    const feedbackBox = document.getElementById("quiz-feedback");
    
    feedbackBox.classList.remove("hidden", "success", "error");

    if (isCorrect) {
        feedbackBox.textContent = "Excelente escolha! 🌱 A irrigação por gotejamento leva água direto à raiz e reduz desperdícios estruturais em até 50%.";
        feedbackBox.classList.add("success");
    } else {
        feedbackBox.textContent = "Ops, tente de novo! 💧 A aspersão convencional perde muita água por evaporação e vento, não sendo a mais otimizada.";
        feedbackBox.classList.add("error");
    }
}
