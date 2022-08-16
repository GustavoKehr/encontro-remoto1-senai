let listaDePecas = ["Retrovisor", "Parabrisa", "Pneu"]

console.log("----------------------------------------------------------------------------------")
console.log("------------------------------Inicio do cadastramento-----------------------------")
console.log("----------------------------------------------------------------------------------")

let pesoDaPeca = 300;
if (pesoDaPeca > 100) {
    console.log("✅ Peso da peça permitido");
} else { 
    console.log("❌ Peso da peça não permitido");

}

console.log("----------------------------------------------------------------------------------")

const capacidadeDaCaixa = 10;
if (capacidadeDaCaixa > 10) {
    console.log("❌ Capacidade da caixa ultrapassada, não permitido concluir o cadastramento");
    
} else {
    console.log("✅ Capacidade permitida, prosseguir cadastramento");
    
}

console.log("----------------------------------------------------------------------------------")

do {listaDePecas.push("Parafuso")
    
} while (listaDePecas < 10);
  
console.log("----------------------------------------------------------------------------------")

for (let index = 0; index < listaDePecas.length; index++) {
    const nomeDaPeca = listaDePecas[index];
        if (nomeDaPeca.length >= 3) {
    console.log(listaDePecas[index])
    console.log("✅ Nome da peça válido, prosseguir cadastramento");
} else {
    console.log(nomeDaPeca.length[index] = listaDePecas[index] + " ❌ Nome da peça inválido");}
}


console.log("----------------------------------------------------------------------------------")

if (pesoDaPeca > 100 + capacidadeDaCaixa < 10 + listaDePecas <= 10 + listaDePecas.length >= 3) {
    console.log("✅ Peças cadastradas com sucesso")
    console.log("----------------------------------------------------------------------------------")
    console.log("-------------------------------Fim do Cadastramento-------------------------------")
    console.log("----------------------------------------------------------------------------------")

}
console.log("----------------------------- " + listaDePecas.length + " Peças foram cadastradas ✅-------------------------");
console.log("----------------------------------------------------------------------------------")