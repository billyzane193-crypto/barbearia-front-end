// 1. Selecionar os elementos necessários
const botoes = document.querySelectorAll('.btn-adicionar');
const campoTotal = document.querySelector('#valor-total');

// 2. Variável para armazenar o valor acumulado
let totalGeral = 0;

// 3. Lógica para percorrer todos os botões e adicionar o evento de clique
botoes.forEach((botao) => {
    botao.addEventListener('click', () => {
        
        // Localiza o preço dentro do card onde o botão foi clicado
        const card = botao.parentElement;
        const precoTexto = card.querySelector('.preco').innerText;
        
        // Converte o texto para número decimal (Float)
        const precoNumerico = parseFloat(precoTexto);
        
        // Soma ao total geral
        totalGeral += precoNumerico;
        
        // Atualiza o valor na tela (formatado com 2 casas decimais)
        campoTotal.innerText = totalGeral.toFixed(2);
        
        console.log(`Adicionado: R$ ${precoNumerico}. Novo total: R$ ${totalGeral}`);
    });
});