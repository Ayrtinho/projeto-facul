import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.page.html',
  styleUrls: ['./noticias.page.scss'],
})
export class NoticiasPage implements OnInit {

  constructor(private navCtrl: NavController) {}

  showFilmes(){
    this.navCtrl.navigateForward('filmes')
  }

  showHome() {
    this.navCtrl.navigateForward('home')
  }

  showFutebol(){
    this.navCtrl.navigateForward('futebol')
  }

  showEventos() {
    this.navCtrl.navigateForward('meus') 
   }

   showLogin() {
    this.navCtrl.navigateForward('login')
  }

  ngOnInit() {
  }

}
