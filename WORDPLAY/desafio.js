import { question } from "readline-sync";
import {readFileSync} from "fs"
import { listinha_arquivo,listinha_com_vinte_letras,listinha_sem_letra_e,escolha_menu } from "./utilsStrings.js";



function main(){
    
    const lista_arquivo = listinha_arquivo();
    const lista_palavra_mais_vinte = listinha_com_vinte_letras(lista_arquivo);
    const lista_palavra_sem_E = listinha_sem_letra_e(lista_arquivo);
    
    escolha_menu(lista_arquivo,lista_palavra_mais_vinte,lista_palavra_sem_E);
    
}
main()
