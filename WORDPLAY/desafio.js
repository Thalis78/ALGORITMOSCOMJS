import { question } from "readline-sync";
import { avoids, file_list, has_no_e, letter_n_list, list, list_twenty_letters, menu_option, percentage } from "./utilsStrings.js";



function main(){
    const lista_arquivo = file_list();
    const lista_palavra_mais_vinte = list_twenty_letters(lista_arquivo);
    const lista_palavra_sem_E = has_no_e(lista_arquivo);
    let lista_com_n_e_letras = 0;
    let letras_proibidas = 0;
    let menu = Number(question(menu_option()))
    
    switch(menu){
        case 1:
            list(lista_arquivo)
            console.log(`
                CARREGAMENTO DE ARQUIVO FEITO COM SUCESSO
                QUANTIDADE DE PALAVRAS : ${lista_arquivo.length.toFixed(2)} %`);
            break;
        case 2:
            list(lista_palavra_mais_vinte)
            console.log(`
                QUANTIDADE DE PALAVRAS : ${lista_palavra_mais_vinte.length}
                PORCENTAGEM            : ${percentage(lista_arquivo.length,lista_palavra_mais_vinte.length).toFixed(2)} %`);

           break;
        case 3:
            list(lista_palavra_sem_E)
                console.log(`
                QUANTIDADE DE PALAVRAS SEM A LETRA E: ${lista_palavra_sem_E.length}
                PORCENTAGEM                         : ${percentage(lista_arquivo.length,lista_palavra_sem_E.length).toFixed(2)} %`);
            break;
        case 4: 
            lista_com_n_e_letras = letter_n_list(lista_arquivo);
            list(lista_com_n_e_letras)
            console.log(`
                QUANTIDADE DE PALAVRAS COM A LETRA N: ${lista_com_n_e_letras.length}
                PORCENTAGEM                         : ${percentage(lista_arquivo.length,lista_com_n_e_letras.length).toFixed(2)} %`);
            break;
        case 5:
            letras_proibidas = avoids(lista_arquivo)
            list(letras_proibidas)
            console.log(`
                QUANTIDADE DE PALAVRAS SEM LETRAS PROIBIDAS: ${letras_proibidas.length}
                PORCENTAGEM                                : ${percentage(lista_arquivo.length,letras_proibidas.length).toFixed(2)} %`);

                
    }
}
main()
