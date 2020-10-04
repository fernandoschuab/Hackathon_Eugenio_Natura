import { Component, OnInit } from '@angular/core';

import { MenuController, Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { Router } from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent{
  [x: string]: any;
public logado: string  = 'Login';


  public produtos = [
    {
      title: 'Kits',
      url: '/kits',
      icon: 'basket'
      
    },
    // {
    //   divider: 'A',
    //   title: 'Itens',
    //   url: '/',
    //   icon: 'nutrition'
    // },
    {
      divider: 'A',
      title: 'Categorias',
      url: '/qr',
      icon: 'list'
    },
   ];

   public cadastro = [
    {
      title: 'Meus Pedidos',
      url: '/cesta',
      icon: 'paper-plane'
    },
    {
      title: 'Minha Conta',
      url: '/minhaconta',
      icon: 'person'
    },
    {
      title: 'Meus Endereços',
      url: '/meus-enderecos',
      icon: 'home'
    }

  ];
  public empresa = [

    {
      title: 'Sobre Nós',
      url: '/sobre',
      icon: 'information-circle'
    }

  ];
  public teste = false;

  
  

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private menu: MenuController,
    private router: Router
  ) {
    this.initializeApp();

    
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      //this._configOneSignal();

     
    });
   
  }
  selectCarrinho(): void{
    this.router.navigate(['/carrinho/'])
  }
  qr(): void{
    this.router.navigate(['/qr/']);
    this.menu.close();
  }

  
}



