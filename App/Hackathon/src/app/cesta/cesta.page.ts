import { CestaModel } from 'src/models/cestaModel';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CestaService } from 'src/services/cesta.service';
import { ItemCestaModel } from 'src/models/ItemCestaModel';

@Component({
  selector: 'app-cesta',
  templateUrl: './cesta.page.html',
  styleUrls: ['./cesta.page.scss'],
})
export class CestaPage implements OnInit {
  items: any = new Array();
  idCesta: string = "";
  cestaLiberada: boolean = true;
  cesta: Array<ItemCestaModel>;
  valorNum: number;

  constructor(
    private router: Router,
    private cestaSrv: CestaService,
  ) {}

  ngOnInit() {
    this.minhaCesta();





  }

  minhaCesta() {
    this.idCesta = this.router.getCurrentNavigation().extras.state as any;
    if(this.idCesta){
      this.cestaSrv.getCesta(this.idCesta)
      .subscribe(
        cesta => this.cesta = cesta,
        error => console.log(error));
    }
   
  }
}