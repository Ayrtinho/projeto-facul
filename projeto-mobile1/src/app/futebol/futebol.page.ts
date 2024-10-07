import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-futebol',
  templateUrl: './futebol.page.html',
  styleUrls: ['./futebol.page.scss'],
})
export class FutebolPage implements OnInit {

  constructor(private navCtrl: NavController) {}

  showLogin() {
    this.navCtrl.navigateForward('login')
  }

  showEventos() {
    this.navCtrl.navigateForward('meus')
  }

  showHome() {
    this.navCtrl.navigateForward('home')
  }
  
  showFilmes(){
    this.navCtrl.navigateForward('filmes')
  }

  showCompra() {
    this.navCtrl.navigateForward('compra')
  }


  ngOnInit() {
  }

}
