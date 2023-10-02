alert('Boas vindas ao jogo do mundo secreto');
let numeroMaximo = 5000;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 1;

//while = enquanto
while(chute != numeroSecreto) {
    chute = prompt(`Escolha um numero entre 1 e ${numeroMaximo}`);
    // if = se
    if (chute == numeroSecreto) {
        // else = senao
    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`);
        } else {
            alert(`O número secreto é maior que ${chute}`);
        }
        tentativas++;
    }
}
let palavraTentativa = tentatita > 1 ? 'tentativas'  : 'tentativa';
alert(`Isso ai! Você descobiu o numero secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);
