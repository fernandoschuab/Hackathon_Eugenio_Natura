import { PedidoModel } from '../models/PedidoModel';
import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { BaseService } from './base.service';
import { environment } from '../environments/environment';
import { CestaModel } from 'src/models/cestaModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CestaService extends BaseService<PedidoModel>{


  private _cesta: CestaModel = new CestaModel();
  private cesta: Observable<CestaModel>;
  private cestaObservable: any; //acionador do observable
  constructor(public http:HttpService) { 
  super('codCesta',http);
  this.cesta = Observable.create(obs => {
    this.cestaObservable = obs;
    this.cestaObservable.next(this._cesta);
  })


  }
  codCestaSearch(codCesta: string){
    return this.http.get(`${environment.url_api}/cesta/${codCesta}`);
  }

  getCesta(idCesta: string): any{
    return this.http.get(`${environment.url_api}/cesta/${idCesta}`);
  }



  

  private _calcularCesta(): void {
    this._cesta.valorTotal = 0;
    this._cesta.itensCesta.forEach(prod => {
      this._cesta.valorTotal += (prod.precoUnidadeProduto * prod.qtdeProduto);
    });
    //console.log('calculado', this._carrinho.valorTotal);
  }
  
  public qtdeItensCarrinho(): number {
    let qtde: number = 0;
    this._cesta.itensCesta.forEach(prod => {
      qtde += (1 * prod.qtdeProduto);
    });
    return qtde;
  }
}

