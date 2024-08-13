import { question } from "readline-sync";
import {readFileSync} from "fs"


export function listinha_arquivo(){
    const dados = readFileSync('words.txt',"utf-8")
    const linhas = dados.split('\n')
    let array = [];
    for(let linha of linhas){
        array.push(linha)
    }
    return array
}
export function opcao_menu(){
    return `
     1 - LOAD FILE
     2 - PALAVRAS C/ 20+ LETRAS
     3 - PALAVRAS S/ LETRA "E"
     4 - PALAVRAS C/ N E QUANTIDADE DE LETRAS
     ESCOLHA:`
}
export function listinha_com_vinte_letras(listinhaComPalavra){
    let array = [];
    for(let i in listinhaComPalavra){
        if(listinhaComPalavra[i].length > 20){
            array.push(listinhaComPalavra[i])
        }
    }

    return array;
}
export function listinha_sem_letra_e(listinhaComPalavra){
    let array = [];
    for(let i in listinhaComPalavra){
        let palavraQuebrada = splitLetras(listinhaComPalavra[i])
        for(let a in palavraQuebrada){
            if(palavraQuebrada[a] == "e"){
                break;
            }
            if(a == palavraQuebrada.length - 1){
                array.push(listinhaComPalavra[i])
            }
        }
    }
    return array


}
export function listinha_letra_n_mais_letras(listinhaComPalavra){
    let array = []
    let quantidadeDeLetras = Number(question("INFORME A QUANTIDADE DE LETRAS: "))
    for(let i in listinhaComPalavra){
        let palavraQuebrada = splitLetras(listinhaComPalavra[i])
        if(quantidadeDeLetras == palavraQuebrada.length -1){
            for(let a = 0; a < palavraQuebrada.length;a++){
                if(palavraQuebrada[a] == "n"){
                    array.push(listinhaComPalavra[i])
                    break;
                }
            }
        }
    }
    return array
}
export function mostrar_lista(array){
    for(let i = 1; i <= array.length;i++){
        console.log(`${i} - ${array[i-1]}`)
    }
}
export function porcentagem(primeiroValor,segundoValor){
    return ((segundoValor * 100)/primeiroValor)
}
function splitLetras(texto){
    let array = []
    for(let linha of texto){
        array.push(linha)
    }
    return array
}
