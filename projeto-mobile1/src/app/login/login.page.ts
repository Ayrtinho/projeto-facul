import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthService } from '../services/auth.service'; // Certifique-se do caminho correto

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email: string = '';
  senha: string = '';

  constructor(
    private navCtrl: NavController,
    private authService: AuthService // Injeta o serviço de autenticação
  ) {}

  ngOnInit() {}

  // Navegar para a página de cadastro
  showCadastro() {
    this.navCtrl.navigateForward('cadastro');
  }

  // Lógica de login
  async onSubmit(form: any) {
    if (form.valid) {
      try {
        await this.authService.login(this.email, this.senha);
        console.log('Login realizado com sucesso!');
        this.navCtrl.navigateForward('home'); // Navega para a página home
      } catch (error: any) {
        const errorMessage = error?.message || 'Ocorreu um erro desconhecido';
        console.error('Erro ao fazer login:', errorMessage);
        alert('Erro ao fazer login: ' + errorMessage);
      }
      
    } else {
      console.log('Formulário inválido');
      alert('Por favor, preencha todos os campos corretamente.');
    }
  }
}