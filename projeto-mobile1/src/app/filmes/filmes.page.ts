import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-filmes',
  templateUrl: './filmes.page.html',
  styleUrls: ['./filmes.page.scss'],
})
export class FilmesPage implements OnInit {
 
  constructor(private navCtrl: NavController ) {}

  showLogin() {
    this.navCtrl.navigateForward('login')
  }

  showEventos() {
    this.navCtrl.navigateForward('meus')
  }

  showHome() {
    this.navCtrl.navigateForward('home')
  }

  
  showFutebol() {
    this.navCtrl.navigateForward('futebol')
  }


  ngOnInit() {
  }

}
