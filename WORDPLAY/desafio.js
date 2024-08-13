import { question } from "readline-sync";
import { listinha_arquivo,listinha_com_vinte_letras,listinha_sem_letra_e,opcao_menu,porcentagem,mostrar_lista} from "./utilsStrings.js";



function main(){
    const lista_arquivo = listinha_arquivo();
    const lista_palavra_mais_vinte = listinha_com_vinte_letras(lista_arquivo);
    const lista_palavra_sem_E = listinha_sem_letra_e(lista_arquivo);
    let lista_com_n_e_letras = 0;
    let menu = Number(question(opcao_menu()))
    
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
                QUANTIDADE DE PALAVRAS COM A LETRA N: ${lista_com_n_e_letras.length}
                PORCENTAGEM                         : ${porcentagem(lista_arquivo.length,lista_com_n_e_letras.length).toFixed(2)} %`);
            break;
    }
}
main()
