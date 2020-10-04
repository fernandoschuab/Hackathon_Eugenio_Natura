import { ItemCestaModel } from './ItemCestaModel';
export class PedidoCestaModel{
    codPedido: string;
    idCestaFisica: string;
    itensCesta: Array<ItemCestaModel>;
    precoUnidadeProduto: number;


    constructor(){
        this.itensCesta = new Array<ItemCestaModel>();
    }
}
