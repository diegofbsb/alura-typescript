import { Imprimivel } from './Imprimivel';
import { MeuObjeto } from './index';

export class Negociacao implements Imprimivel, MeuObjeto<Negociacao>{

    constructor(readonly data: Date, readonly quantidade: number, readonly valor: number) { }

    get volume() {
        return this.quantidade * this.valor;
    }

    paraTexto(): void {
        console.log('==========IMPRESSÃO Negociacao=============');
        console.log(
            `Data: ${this.data}
             Quantidade: ${this.quantidade}, 
             Valor: ${this.valor}, 
             Volume: ${this.volume}`
        )
    }

    ehIgual(negociacao: Negociacao): boolean{
        return this.data.getDate() == negociacao.data.getDate()
        && this.data.getMonth() == negociacao.data.getMonth()
        && this.data.getFullYear() == negociacao.data.getFullYear();
    }
}
