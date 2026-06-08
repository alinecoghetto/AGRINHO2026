// EXECUTA FUNÇÕES RETRÔ AO CARREGAR A PÁGINA
document.addEventListener("DOMContentLoaded", () => {
    iniciarRelogio();
    configurarFormulario();
});

// 1. RELÓGIO DIGITAL DINÂMICO
function iniciarRelogio() {
    setInterval(() => {
        const agora = new Date();
        const horas = String(agora.getHours()).padStart(2, '0');
        const minutos = String(agora.getMinutes()).padStart(2, '0');
        const segundos = String(agora.getSeconds()).padStart(2, '0');
        
        const elementoRelogio = document.getElementById('clock');
        if (elementoRelogio) {
            elementoRelogio.textContent = `${horas}:${minutos}:${segundos}`;
        }
    }, 1000);
}

// 2. COMPORTAMENTO DA ENQUETE RETRÔ
function votarEnquete() {
    const opcoes = document.getElementsByName('poll');
    let selecionado = false;
    
    for (const opcao of opcoes) {
        if (opcao.checked) {
            selecionado = true;
            break;
        }
    }
    
    if (selecionado) {
        alert("Obrigado pelo seu voto! Seu dado foi processado nesta simulação anos 2000.");
    } else {
        alert("Por favor, selecione uma opção antes de votar!");
    }
}

// 3. INTERATIVIDADE DO QUIZ DE SUSTENTABILIDADE
function verificarQuiz(resultado) {
    if (resultado === 'certo') {
        alert("Correto! A Irrigação Inteligente evita o desperdício controlando a água com precisão milimétrica. +10 Pontos de Eco-Consciência!");
    } else {
        alert("Resposta Incorreta! Drones ajudam no mapeamento, mas quem controla o uso direto da água é a Irrigação Inteligente. Tente novamente!");
    }
}

// 4. VALIDAÇÃO E ENVIO DO FORMULÁRIO DE MANIFESTO
function configurarFormulario() {
    const formulario = document.getElementById('contactForm');
    
    if (formulario) {
        formulario.addEventListener('submit', (evento) => {
            evento.preventDefault(); 
            
            const nome = document.getElementById('nome').value;
            const mensagem = document.getElementById('mensagem').value;
            
            if (nome.trim() === "" || mensagem.trim() === "") {
                alert("Erro no sistema: preencha todos os campos do manifesto!");
            } else {
                alert(`Obrigado, ${nome}! Seu manifesto ambiental foi registrado com sucesso em nossa base de dados.`);
                formulario.reset(); 
            }
        });
    }
}
