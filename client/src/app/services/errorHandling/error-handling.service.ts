import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlingService {

  constructor(private alertController: AlertController) { }

  async errorMessage(message) {
    const alert = this.alertController.create({
      message: message,
      header: "Error",
      buttons: ['OK']
    });
    (await alert).present();
  }
}
