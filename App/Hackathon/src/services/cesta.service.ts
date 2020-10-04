
import { PedidoCestaModel } from './../models/PedidoCestaModel';
import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { BaseService } from './base.service';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class CestaService extends BaseService<PedidoCestaModel>{
  constructor(public http:HttpService) { 
    super('codCesta',http);
  }
  codCestaSearch(codCesta: string){
    return this.http.get(`${environment.url_api}/cesta/${codCesta}`);
  }

}

