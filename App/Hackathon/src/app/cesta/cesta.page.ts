import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cesta',
  templateUrl: './cesta.page.html',
  styleUrls: ['./cesta.page.scss'],
})
export class CestaPage implements OnInit {
  items: any = new Array();
  idCesta: string = "";
  cestaLiberada: boolean = true;

  constructor(
    private router: Router
  ) {}

  ngOnInit() {
    this.idCesta = this.router.getCurrentNavigation().extras.state as any;
  }

}
