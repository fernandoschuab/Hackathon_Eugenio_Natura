import { ItemCestaModel } from './ItemCestaModel';
export class PedidoModel{
    codPedido: string;
    idCestaFisica: string;
    itensCesta: Array<ItemCestaModel>;
    precoTotal: number;
    descontoPedido: number = 0;
    codCliente: string;

    constructor(){
        this.itensCesta = new Array<ItemCestaModel>();
    }
}
