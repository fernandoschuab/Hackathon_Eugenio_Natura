import { ItemCestaModel } from './ItemCestaModel';
export class CestaModel{
    idCestaFisica: string;
    itensCesta: Array<ItemCestaModel>;
    valorTotal: number;

    constructor(){
        this.itensCesta = new Array<ItemCestaModel>();
    }
}
