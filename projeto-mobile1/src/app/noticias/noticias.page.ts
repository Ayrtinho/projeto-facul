import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.page.html',
  styleUrls: ['./noticias.page.scss'],
})
export class NoticiasPage implements OnInit {
  news: any = [];

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
    this.getTeslaNews();
  }
  getTeslaNews() {
    const apiUrl = 'https://newsapi.org/v2/everything?q=futebol e filmes&from=2024-09-22&sortBy=publishedAt&apiKey=834c92db1be44f6ca2f114bd56199215';
    
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        this.news = data.articles.slice(0, 10);
      })
      .catch(error => console.error('Error fetching data:', error));
  }
}

