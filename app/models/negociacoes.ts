import { Negociacao } from "./negociacao.js";

export class Negociacoes{
    private negociacoes: Array<Negociacao> = [];

    adciona(negociacao: Negociacao){
        this.negociacoes.push(negociacao);
    }

    lista(): Array<Negociacao>{
        return this.negociacoes;
    }
}