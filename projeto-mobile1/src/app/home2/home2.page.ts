import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-home2',
  templateUrl: './home2.page.html',
  styleUrls: ['./home2.page.scss'],
})
export class Home2Page {

  constructor(private router:  Router ,private navCtrl: NavController, ) {}

  showLogin() {
    this.navCtrl.navigateForward('login')
  }

  showEventos() {
    this.navCtrl.navigateForward('meus')
  }

  showFilmes() {
    this.navCtrl.navigateForward('filmes')
  }

  showFutebol() {
    this.navCtrl.navigateForward('futebol')
  }

  showNoticias(){
    this.navCtrl.navigateForward('noticias')
  }

  showCompra() {
    this.navCtrl.navigateForward('compra')
  }

  showBuy() {
    this.navCtrl.navigateForward('buy')
  }

  showHome() {
    this.navCtrl.navigateForward('home')
  }
}
