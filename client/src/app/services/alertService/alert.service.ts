import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(private alertController: AlertController) { }

  alert: string = null;

  async errorMessageAlert(message) {
    const alert = this.alertController.create({
      message: message,
      header: "Error",
      buttons: ['OK']
    });
    (await alert).present();
    console.log(alert)
  }

  async ShowSuccess(message) {
    const alert = this.alertController.create({
      message: message,
      header: "Success",
      buttons: ['OK']
    });
    (await alert).present();

  }

  async ShowInfo(message) {
    const alert = this.alertController.create({
      message: message,
      header: "Info",
      buttons: ['OK']
    });
    (await alert).present();
  }
}