import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cesta',
  templateUrl: './cesta.page.html',
  styleUrls: ['./cesta.page.scss'],
})
export class CestaPage implements OnInit {
  items: any = new Array();
  cestaLiberada: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
