import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email: string = '';
  senha: string = '';

  constructor(private navCtrl: NavController) {}

  showCadastro() {
    this.navCtrl.navigateForward('cadastro')
  }

  ngOnInit() {
  }
  
  onSubmit(form: any) {
    if (form.valid) {
      console.log('Formulário válido, dados:', this.email, this.senha);
    } else {
      console.log('Formulário inválido');
    }
}
}
