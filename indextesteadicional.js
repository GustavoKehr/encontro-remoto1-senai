let listaDePecas = ["Retrovisor", "Parabrisa", "Pneu"]

console.log("------------------------------Inicio do cadastramento-----------------------------")
console.log("----------------------------------------------------------------------------------")

let pesoDaPeca = [300];
if (pesoDaPeca > 100) {console.log("Peso da peça permitido");
} else { console.log("Peso da peça não permitido");

}

console.log("----------------------------------------------------------------------------------")

let capacidadeDaCaixa = [9];
if (capacidadeDaCaixa > 10) {console.log("Capacidade da caixa ultrapassada, não permitido concluir o cadastramento");
    
} else {console.log("Capacidade permitida, prosseguir cadastramento");
    
}

console.log("----------------------------------------------------------------------------------")

for (let index = 0; index < listaDePecas.length; index++) {
    const nomeDaPeca = listaDePecas[index];
         if (nomeDaPeca.length < 3) {console.log("Nome da peça inválido");}
         else {console.log("Nome da peça válido, prosseguir cadastramento");}
}

console.log("----------------------------------------------------------------------------------")

if (pesoDaPeca > 100, capacidadeDaCaixa < 10, listaDePecas.length < 10) {
    console.log("Peça cadastrada com sucesso");
    listaDePecas.length++
    console.log("----------------------------------------------------------------------------------")
        console.log(listaDePecas.length, "Peças cadastradas");
}

for (let index = 0; listaDePecas.length; index++) {
    const nomeDaPeca = listaDePecas[index];

}
        if (nomeDaPeca.length < 3) {
         listaDePecas.push ("Parafuso");
         console.log(listaDePecas.length, "Peças cadastradas com sucesso");
}
console.log("-------------------------------Fim do Cadastramento-------------------------------")