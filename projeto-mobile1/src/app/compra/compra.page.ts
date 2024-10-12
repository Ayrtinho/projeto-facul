import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-compra',
  templateUrl: './compra.page.html',
  styleUrls: ['./compra.page.scss'],
})
export class CompraPage implements OnInit {

  constructor(private navCtrl: NavController) {}

  showFinalizar(){
    this.navCtrl.navigateForward('finalizar')
  }

  ngOnInit() {
  }


}
