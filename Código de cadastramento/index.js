const listaDePecas = ["Retrovisor", "Parabrisa", "Pneu"]

console.log("----------------------------")
console.log("Inicio do cadastramento")
console.log("----------------------------")

let (pesoDaPeca) = [300];
if (pesoDaPeca > 100) {console.log("Peso da peça permitido");
} else { console.log("Peso da peça não permitido");

}

let (capacidadeDaCaixa) = [10];
if (capacidadeDaCaixa => 10) {console.log("Capacidade da caixa ultrapassada, não permitido concluir o cadastramento");
    
} else {console.log("Capacidade permitida, prosseguir cadastramento");
    
}

for (let index = 0; index < listaDePecas.length; index++) {
    const nomeDaPeca = listaDePecas[index];
         if (nomeDaPeca.length < 3) {console.log("Nome da peça inválido")}
         else {console.log("Nome da peça válido, prosseguir cadastramento")}
}
console.log("----------------------------")