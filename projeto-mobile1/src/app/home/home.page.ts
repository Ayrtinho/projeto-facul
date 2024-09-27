import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {

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


}
