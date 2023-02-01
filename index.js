// Atividade da ImersãoDev.

// var valorEmDolar = 64;
// var cotacaoDoDolar = 5.07;
// var valorEmReal = valorEmDolar * cotacaoDoDolar;
// valorEmReal = valorEmReal.toFixed(2);
// alert('R$' + valorEmReal);

// Desafio 1: Alterar moeda de conversão para um criptomoeda.

// Desafio 2: Fazer a conversão de uma moeda e exibir um alerta com o nome da pessoa que está fazendo a conversão.

// Desafio 3: Alterar o conversor para medidas espaciais, criando inicialmente a conversão de anos luz para metros. Alterar também o título da página e imagem de background.

// Desafio 1, 2 e 3:

var valorBitcoin = 116523.61;
var valorEtherum = 7962.26;
var valorSolana = 118.19 

var unidadeAstronomica = 149597828677.28;
var anosLuz = 9460528405000020;
var parsec = 30856778570831268;


var nomeUsuario = prompt ('Olá,' + '\n' + 'Qual seu nome?')

var selecionarConversor = prompt ('Qual conversor deseja selecionar?' + '\n' + '1- Conversor de criptomoedas.' + '\n' + '2- Conversor de medidas espaciais.')

if (selecionarConversor == 1) {
    var valorEmReal = prompt('Digite o valor em reais' + '\n' + ' Ex.: 100.00');
var escolhaMoeda = prompt ('Qual moeda você deseja converter?' + '\n' + '1 - Bitcoin' + '\n' + '2 - Etherum' + '\n' + '3 - Solana');

if (escolhaMoeda == 1) {
    var conversaoBitcoin = valorEmReal / valorBitcoin;
    conversaoBitcoin = conversaoBitcoin.toFixed(5);

    alert(nomeUsuario + ',' + '\n' + 'R$'+ valorEmReal + ' equivale a ' + conversaoBitcoin + ' Bitcoins.' + '\n' + 'Atualmente 1 Bitcoin custa ' + 'R$' + valorBitcoin.toFixed(2));

} if (escolhaMoeda == 2) {
    var conversaoEtherum = valorEmReal / valorEtherum;
    conversaoEtherum = conversaoEtherum.toFixed(5); 

    alert(nomeUsuario + ',' + '\n' + 'R$'+ valorEmReal +' equivale a '+ conversaoEtherum + ' Etherums.' + '\n' + 'Atualmente 1 Etherum custa ' + 'R$' + valorEtherum.toFixed(2));

} if (escolhaMoeda == 3) {
    var conversaoSolana = valorEmReal / valorSolana;
    conversaoSolana = conversaoSolana.toFixed(2);

    alert(nomeUsuario + ',' + '\n' + 'R$'+ valorEmReal +' equivale a '+ conversaoSolana + ' Solanas.' + '\n' + 'Atualmente 1 Solana custa ' + 'R$' + valorSolana.toFixed(2));

} if (escolhaMoeda >= 4) {
    alert('Opção inválida.');}
} else if (selecionarConversor == 2) {
    var escolhaMedida = prompt('Escolha a medida desejada:' + '\n' + '1- Anos Luz.' + '\n' + '2- Unidade Astrônomica.'
    + '\n' + '3- Parsec.');

    if (escolhaMedida == 1) {
        var escolhaValor = prompt('Você selecionou: Anos Luz.' + '\n' + 'Digite o valor a ser convertido:')

        var resultado = escolhaValor * anosLuz;
        var kilometros = resultado * 0.001;
        

        alert(nomeUsuario + ',' + '\n' + escolhaValor + ' Anos Luz equivale a:' + '\n' + resultado + ' Metros;' + '\n' +'ou' + '\n' + kilometros.toFixed(2) + ' Quilòmetros.');

    } else if (escolhaMedida == 2) {
        var escolhaValor = prompt('Você selecionou: Unidade Astrônomica.' + '\n' + 'Digite o valor a ser convertido:')

        var resultado = escolhaValor * unidadeAstronomica;
        var kilometros = resultado * 0.001;
        

        alert(nomeUsuario + ',' + '\n' + escolhaValor + ' Unidade Astronômica equivale a:' + '\n' + resultado + ' Metros;' + '\n' +'ou' + '\n' + kilometros.toFixed(2) + ' Quilòmetros.');

    } else if (escolhaMedida == 3) {
        var escolhaValor = prompt('Você selecionou: Parsec.' + '\n' + 'Digite o valor a ser convertido:')

        var resultado = escolhaValor * parsec;
        var kilometros = resultado * 0.001;
        

        alert(nomeUsuario + ',' + '\n' + escolhaValor + ' Parsec equivale a:' + '\n' + resultado + ' Metros;' + '\n' +'ou' + '\n' + kilometros.toFixed(2) + ' Quilòmetros.');
    }
} 







