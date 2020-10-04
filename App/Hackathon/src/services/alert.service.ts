import { Injectable } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';


@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(
    private alertCtrl: AlertController,
    private toastCtrl: ToastController
  ) { }

  async toast(title: string,position:any = 'top'): Promise<void>{
    const toast = await this.toastCtrl.create({message: title, position, duration: 3000}); //cria
    await toast.present(); // exibe
    }
    async alert(title: string,message: string): Promise<void>{
      const alert = await this.alertCtrl.create({
        header: title,
        message,
        buttons: ['OK'],
        backdropDismiss: false
      }); //cria
      await alert.present(); // exibe
      } 

      async confirm(title: string,message: string, callback:any): Promise<void>{
        const alert = await this.alertCtrl.create({
          header: title,
          message,
          buttons: [
            {text:'Não', role: 'Cancel', handler:() =>{
              console.log('Confirm: Say: NO');
            } },
            {text:'Sim', handler:() =>{callback();} },
          ],
        });
        await alert.present();
      }
  

}
