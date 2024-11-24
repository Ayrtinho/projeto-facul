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
    const apiUrl = 'https://newsapi.org/v2/everything?q=futebolefilmes&from=2024-10-24&sortBy=publishedAt&apiKey=725a67681180417681f0ecd373d8176f';
    
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        this.news = data.articles.slice(0, 8);
      })
      .catch(error => console.error('Error fetching data:', error));
  }
}

