import { ItemCestaModel } from './ItemCestaModel';
export class PedidoCestaModel{
    codPedido: string;
    idCestaFisica: string;
    itensCesta: Array<ItemCestaModel>;
    precoUnidadeProduto: number;
    precoTotal: number;
    descontoPedido: number;
    codCliente: string;

    constructor(){
        this.itensCesta = new Array<ItemCestaModel>();
    }
}
