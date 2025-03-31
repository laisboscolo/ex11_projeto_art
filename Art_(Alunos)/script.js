// Função para alternar a visibilidade dos detalhes garantindo que apenas um fique aberto
function toggleDetalhes(buttonId, quadroId) {
    // Esconde todos os quadros de detalhes
    document.querySelectorAll('[id^="quadroDetalhes"]').forEach(function(quadro) {
        if (quadro.id !== quadroId) {
            quadro.style.display = "none";
            // Reseta o texto dos botões
            document.querySelectorAll('[id^="btnDetalhes"]').forEach(function(btn) {
                btn.textContent = "Detalhes";
            });
        }
    });

    // Obtém o botão e o quadro de detalhes específico
    var button = document.getElementById(buttonId);
    var quadro = document.getElementById(quadroId);

    // Alterna a visibilidade do quadro de detalhes
    if (quadro.style.display === "none" || quadro.style.display === "") {
        quadro.style.display = "block"; // Torna o quadro visível
        button.textContent = "Ocultar Detalhes"; // Altera o texto do botão
    } else {
        quadro.style.display = "none"; // Torna o quadro invisível
        button.textContent = "Detalhes"; // Restaura o texto do botão
    }
}

// Adiciona os eventos de clique para cada botão
document.querySelectorAll('[id^="btnDetalhes"]').forEach(function(button, index) {
    button.addEventListener('click', function(event) {
        event.preventDefault(); // Previne o comportamento de scroll
        toggleDetalhes(button.id, `quadroDetalhes-${index + 2}`);
    });
});