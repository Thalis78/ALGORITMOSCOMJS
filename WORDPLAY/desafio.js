import { question } from "readline-sync";
import {readFileSync} from "fs"
import { splitLetras } from "./utilsStrings.js";


function main(){
    const lista_arquivo = listinha_arquivo();
    const lista_palavra_mais_vinte = listinha_com_vinte_letras(lista_arquivo);
    const lista_palavra_sem_E = listinha_sem_letra_e(lista_arquivo);
    escolha_menu(lista_arquivo,lista_palavra_mais_vinte,lista_palavra_sem_E);
}
function listinha_arquivo(){
    const dados = readFileSync('words.txt',"utf-8")
    const linhas = dados.split('\n')
    let array = [];
    for(let linha of linhas){
        array.push(linha)
    }
    return array
}
function escolha_menu(lista_arquivo,lista_palavra_mais_vinte,lista_palavra_sem_E){
    let menu = Number(question(opcao_menu()))
    let lista_com_n_e_letras = 0;
    switch(menu){
        case 1:
            mostrar_lista(lista_arquivo)
            console.log(`
                CARREGAMENTO DE ARQUIVO FEITO COM SUCESSO
                QUANTIDADE DE PALAVRAS : ${lista_arquivo.length.toFixed(2)} %`);
            break;
        case 2:
            mostrar_lista(lista_palavra_mais_vinte)
            console.log(`
                QUANTIDADE DE PALAVRAS : ${lista_palavra_mais_vinte.length}
                PORCENTAGEM            : ${porcentagem(lista_arquivo.length,lista_palavra_mais_vinte.length).toFixed(2)} %`);

           break;
        case 3:
            mostrar_lista(lista_palavra_sem_E)
                console.log(`
                QUANTIDADE DE PALAVRAS SEM A LETRA E: ${lista_palavra_sem_E.length}
                PORCENTAGEM                         : ${porcentagem(lista_arquivo.length,lista_palavra_sem_E.length).toFixed(2)} %`);
            break;
        case 4: 
            lista_com_n_e_letras = listinha_letra_n_mais_letras(lista_arquivo);
            mostrar_lista(lista_com_n_e_letras)
            console.log(`
                QUANTIDADE DE PALAVRAS SEM A LETRA E: ${lista_com_n_e_letras.length}
                PORCENTAGEM                         : ${porcentagem(lista_arquivo.length,lista_com_n_e_letras.length).toFixed(2)} %`);
            break;
    }
}
function opcao_menu(){
    return `
     1 - LOAD FILE
     2 - PALAVRAS C/ 20+ LETRAS
     3 - PALAVRAS S/ LETRA "E"
     4 - PALAVRAS C/ N E QUANTIDADE DE LETRAS
     ESCOLHA:`
}
function listinha_com_vinte_letras(listinhaComPalavra){
    let array = [];
    for(let i in listinhaComPalavra){
        if(listinhaComPalavra[i].length > 20){
            array.push(listinhaComPalavra[i])
        }
    }

    return array;
}
function listinha_sem_letra_e(listinhaComPalavra){
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
function listinha_letra_n_mais_letras(listinhaComPalavra){
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
function mostrar_lista(array){
    for(let i = 1; i <= array.length;i++){
        console.log(`${i} - ${array[i-1]}`)
    }
}
function porcentagem(primeiroValor,segundoValor){
    return ((segundoValor * 100)/primeiroValor)
}
main()
