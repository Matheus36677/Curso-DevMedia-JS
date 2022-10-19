import entradaDados from 'readline-sync';

let salarioMinimo = [
    {ano: 2010, salario: 510.00},
    {ano: 2011, salario: 545.00},
    {ano: 2012, salario: 622.00},
    {ano: 2013, salario: 678.00},
    {ano: 2014, salario: 724.00},
    {ano: 2015, salario: 788.00},
    {ano: 2016, salario: 880.00},
    {ano: 2017, salario: 937.00},
    {ano: 2018, salario: 954.00},
    {ano: 2019, salario: 998.00},
    {ano: 2020, salario: 1045.00}
];

let inflacao = [
    {ano: 2010, ipca: 5.91},
    {ano: 2011, ipca: 6.50},
    {ano: 2012, ipca: 5.84},
    {ano: 2013, ipca: 5.91},
    {ano: 2014, ipca: 6.41},
    {ano: 2015, ipca: 10.67},
    {ano: 2016, ipca: 6.29},
    {ano: 2017, ipca: 2.95},
    {ano: 2018, ipca: 3.75},
    {ano: 2019, ipca: 4.31},
    {ano: 2020, ipca: 4.52}
];



console.log("Escolha uma das alternativas: \n");
console.log("1 - Listar os salarios minimos de 2010 á 2020");
console.log("2 - Listar o indice  IPCA de 2010 á 2020");
console.log("3 - Comparação  entre o percentual de aumento salarial e o IPCA\n");

let escolha = entradaDados.question("Digite o numero da sua escolha: ");

switch(Number(escolha)){
    case 1:
        for(let i = 0; i < salarioMinimo.length; i++){
            let ano = salarioMinimo[i].ano;
            let salarial = salarioMinimo[i].salario.toFixed(2).replace('.',','); 
        
            console.log("\nAno: " .padEnd(30, ".") + ano);
            console.log("Salario minimo: ".padEnd(30, ".") + "R$ " + salarial) 
        }
        break;
    case 2:
        for(let i = 0; i < inflacao.length; i++){
            let ano = inflacao[i].ano;
            let ipca = inflacao[i].ipca.toFixed(2).replace('.',','); 
        
            console.log("\nAno: " .padEnd(30, ".") + ano);
            console.log("Inflação IPCA: ".padEnd(30, ".") + ipca) 
        }
        break;
    case 3:
        for(let i = 0; i <= salarioMinimo.length-1; i++){
            let ano = salarioMinimo[i].ano;
            let salarial = salarioMinimo[i].salario; 
            let salarialFormatado = salarial.toFixed(2).replace('.',',')
            let ipca = inflacao[i].ipca.toFixed(2).replace('.',','); 
            let percentualCrescimento;
            let crescimentoFormatado;
            if( i > 0){
                let salarioAnterior = salarioMinimo[i-1].salario;
                let diferenca = salarial - salarioAnterior;

                percentualCrescimento = (diferenca / salarioAnterior) * 100;
                crescimentoFormatado = Number(percentualCrescimento).toFixed(2).replace('.',',');
            }else{
                crescimentoFormatado = "-";
            }

            console.log("\nAno: " .padEnd(30, ".") + ano);
            console.log("Salario minimo: ".padEnd(30, ".") + "R$ " + salarialFormatado);
            console.log("Crescimento Salarial: ".padEnd(30, ".") + crescimentoFormatado + "%");
            console.log("Inflação IPCA: ".padEnd(30, ".") + ipca + "%");
        } 
        break;
    default:
        console.log("\nOpção invalida!");
        break;
        
}












