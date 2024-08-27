function embaralharTexto(texto) {
    // inverte a ordem dos caracteres e desloca cada letra 3 posições no alfabeto
    return texto.split('').reverse().map(char => {
        if (char >= 'a' && char <= 'z') {
            return String.fromCharCode(((char.charCodeAt(0) - 97 + 3) % 26) + 97);
        }
        return char; // retorna o caractere inalterado se não for uma letra minúscula (incluindo espaços)
    }).join('');
}

function descriptografarTexto(texto) {
    // inverte a ordem dos caracteres e desloca cada letra 3 posições no alfabeto para trás
    return texto.split('').reverse().map(char => {
        if (char >= 'a' && char <= 'z') {
            return String.fromCharCode(((char.charCodeAt(0) - 97 - 3 + 26) % 26) + 97);
        }
        return char; // retorna o caractere inalterado se não for uma letra minúscula (incluindo espaços)
    }).join('');
}

function copiarParaAreaDeTransferencia(texto) {
    navigator.clipboard.writeText(texto).catch(err => {
        console.error('Erro ao copiar o texto: ', err);
    });
}

// HTML
const textoEntradaCampo = document.getElementById('textoEntradaCampo');
const textoSaidaCampo = document.getElementById('textoSaidaCampo');
const botaoEmbaralhar = document.getElementById('embaralhar');
const botaoDesembaralhar = document.getElementById('desembaralhar');
const botaoCopiar = document.querySelector('.copiarTexto');

// função de criptografar ao botão de criptografia
botaoEmbaralhar.addEventListener('click', () => {
    const texto = textoEntradaCampo.value.trim(); // remove espaços extras no início e no final
    if (texto) { // verifica se o texto não está vazio
        textoSaidaCampo.value = embaralharTexto(texto);
    }
});

// função de descriptografar ao botão de descriptografia
botaoDesembaralhar.addEventListener('click', () => {
    const texto = textoEntradaCampo.value.trim(); // Remove espaços extras no início e no final
    if (texto) { // verifica se o texto não está vazio
        // a descriptografia deve funcionar em qualquer texto que esteja no campo de saída
        textoSaidaCampo.value = descriptografarTexto(texto);
    }
});

// função de copiar ao botão de cópia
botaoCopiar.addEventListener('click', () => {
    const texto = textoSaidaCampo.value.trim(); // remove espaços extras no início e no final
    if (texto) { // verifica se o texto não está vazio
        copiarParaAreaDeTransferencia(texto);
    }
});
