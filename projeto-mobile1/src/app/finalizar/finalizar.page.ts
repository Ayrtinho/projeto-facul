import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import * as QRCode from 'qrcode'; // Correção na importação
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-finalizar',
  templateUrl: './finalizar.page.html',
  styleUrls: ['./finalizar.page.scss'],
})
export class FinalizarPage {
  totalAmount: number = 0; // valor total da compra
  paymentMethod: string = 'credit_card';
  cardNumber!: string;
  cardName!: string;
  pixCode!: string;

  constructor(private alertController: AlertController, private navCtrl: NavController) {}

  onPaymentMethodChange() {
    this.pixCode = ''; // Limpa o código PIX ao mudar o método de pagamento
  }

  async generatePix() {
    // Aqui você geraria uma chave PIX real. Para fins de exemplo, usaremos um texto simples.
    const pixKey = `key-${Math.random().toString(36).substring(7)}`;
    this.pixCode = await QRCode.toDataURL(pixKey);
  }

  async processPayment() {
    if (this.paymentMethod === 'credit_card') {
      // Lógica para processar pagamento com cartão de crédito
      const alert = await this.alertController.create({
        header: 'Pagamento Realizado',
        message: `Pagamento de R$${this.totalAmount} com cartão de crédito realizado com sucesso!`,
        buttons: ['OK'],
      });
      await alert.present();
    } 
  }


  showCancelar() {
    this.navCtrl.navigateForward('home')
  }
}

