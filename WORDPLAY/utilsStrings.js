import { question } from "readline-sync";
import {readFileSync} from "fs"


export function file_list(){
    const dados = readFileSync('words.txt',"utf-8")
    const linhas = dados.split('\n')
    let array = [];
    for(let linha of linhas){
        array.push(linha)
    }
    return array
}
export function menu_option(){
    return `
     1 - LOAD FILE
     2 - PALAVRAS C/ 20+ LETRAS
     3 - PALAVRAS S/ LETRA "E"
     4 - PALAVRAS C/ N E QUANTIDADE DE LETRAS
     5 - PALAVRAS PROIBIDAS
     ESCOLHA:`
}
export function list_twenty_letters(listinhaComPalavra){
    let array = [];
    for(let i in listinhaComPalavra){
        if(listinhaComPalavra[i].length > 20){
            array.push(listinhaComPalavra[i])
        }
    }

    return array;
}
export function has_no_e(listinhaComPalavra){
    let array = [];
    for(let i in listinhaComPalavra){
        let palavraQuebrada = letter_split(listinhaComPalavra[i])
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
export function letter_n_list(listinhaComPalavra){
    let array = []
    let quantidadeDeLetras = Number(question("INFORME A QUANTIDADE DE LETRAS: "))
    for(let i in listinhaComPalavra){
        let palavraQuebrada = letter_split(listinhaComPalavra[i])
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
export function avoids(listinhaComPalavra){
    let array = [];
    let letras_proibidas = question("INFORME AS LETRAS PROIBIDAS COM ESPAÇO('A' 'B'  'E' ...):").toLowerCase();
    let array_letras_proibidas = split_space(letras_proibidas)
    for(let i in listinhaComPalavra){
        let palavraQuebrada = letter_split(listinhaComPalavra[i])
        for(let a in palavraQuebrada){ 
            let pararEstrutura = boolean(array_letras_proibidas,palavraQuebrada,a);
            if(pararEstrutura == false){
                break;
            }
            if(a == palavraQuebrada.length - 1){
                console.log()
                array.push(listinhaComPalavra[i])
            }
        }    
    }

    return array    
}
function boolean(array_letras_proibidas,palavraQuebrada,index){
    for(let u in array_letras_proibidas){
        "a == a = true; break" 
        if(array_letras_proibidas[u] == palavraQuebrada [index]){
            return false
        }
        if(u == array_letras_proibidas.length - 1){
            
            return true;
        }
    }}


export function list(array){
    for(let i = 1; i <= array.length;i++){
        console.log(`${i} - ${array[i-1]}`)
    }
}
export function percentage(primeiroValor,segundoValor){
    return ((segundoValor * 100)/primeiroValor)
}
function letter_split(texto){
    let array = []
    for(let linha of texto){
        array.push(linha)
    }
    return array
}
function split_space(texto){
    let array = []
    for(let linha of texto){
        if(linha.charCodeAt(0) != 32){
            array.push(linha)
        }
    }
    return array;
}
