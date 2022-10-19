import entradaDados from 'readline-sync';

console.log("Aplicação de Juros: \n");

let divida = entradaDados.question("Informe o Valor devido: R$ ");
let juros;
let valorJuros;
let valorTotal;
let diaAtraso;

if(divida > 0){
    diaAtraso = entradaDados.question("Informe quantos dias se passou desde o vencimento do boleto: ");

    if(diaAtraso > 0){
        if(diaAtraso >= 15){
            juros = 10;
        }else{
            juros = 5;
            
        }

        valorJuros = (Number(divida) / 100) * Number(juros);
        valorTotal = Number(divida) + Number(valorJuros); 

        console.log("\nValor original da divida: R$" + divida);
        console.log("Dias atrasados: "+ diaAtraso);
        console.log("Taxa de juros: "+ juros +"%");
        console.log("Valor total com juros: R$"+valorTotal);

    }else{
        console.log("Você esta em dia!")
    }
}else{
    console.log("O valor devido deve ser maior que zero!")
}









