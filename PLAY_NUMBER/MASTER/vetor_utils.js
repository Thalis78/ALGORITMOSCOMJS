import {readFileSync} from "fs"

import { int,input, number_random ,print} from "./utils.js"

export function vetor_aleatorio(min,max,tamanho){
    let vetor = []
    for(let i = 0; i < tamanho;i++){
        vetor.push(number_random(min,max))
    }
    return vetor;
}
export function vetor_feito_por_usuario(min,max,tamanho){
    let vetor = []
    for(let i = 0; i < tamanho;i++){
        let numero = int(input("INFORME O NUMERO: "))
        if(numero > max || numero < min){
            numero = int(input("NUMERO INVALIZDO\nINFORME O NUMERO: "))
        }
        vetor.push(numero)
    }
    return vetor;
}
export function vetor_por_arquivo(){
    let vetor = {}
    const dados = readFileSync(input("INFORME O NOME DO ARQUIVO(EX:. PLAY_NUMBER.TXT): "))
    const linhas = dados.split('')
    for(let linha of linhas){
        vetor.push(linha)
    }
    return vetor
}
export function filter(vetor,funcao){
    let number = []
    for(let i of vetor){
        if(funcao(i)){
            number.push(i)
        }
    }
    return number;
}
export function map(vetor,expressao){
    let novo_vetor = [];
    for(let i of vetor){
        novo_vetor.push(expressao(i))
    }
    return novo_vetor
}
export function map_fracao(vetor){
    let novo_vetor = [];
    let numero = input("DIGITE UMA FRACAO PARA MULTIPLICAR TODOS OS VALORES DO VETOR: ").split("/").map(Number);
    for (let i of vetor) {
        let novo_Num = (i * numero[0]) / numero[1];
        novo_vetor.push(parseFloat(novo_Num.toFixed(2)));

    }
    return novo_vetor;
}
export function map_negativos(vetor){
    let novo_vetor = filter_positivos(vetor)
    let num = input("INFORME O MINIMO E O MAXIMO(EX: 10,20)").split(",").map(Number)
    for(let i = novo_vetor.length;i < vetor.length;i++){
        novo_vetor.push(number_random(num[0],num[1]))
    }
    return novo_vetor
}
export function ordem(vetor){
    let novo_vetor = []
    for (let i = 0; i < vetor.length; i++) {
        let elemento = vetor[i]
        let e = novo_vetor.length - 1
        while (e >= 0 && novo_vetor[e] > elemento) {
            e--
        }
        novo_vetor.splice(e + 1, 0, elemento)
    }
    return novo_vetor;

}
export function embaralhar(vetor){
    let novo_vetor = [];

    while (vetor.length > 0) {

        let index = number_random(0, vetor.length - 1);
        let elemento = vetor.splice(index, 1)[0];

        novo_vetor.push(elemento);
    }

    return novo_vetor;
}