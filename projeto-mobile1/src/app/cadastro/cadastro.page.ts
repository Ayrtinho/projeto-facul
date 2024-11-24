import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth'; // Importa o módulo de autenticação

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage {
  nome: string = '';
  senha: string = '';
  email: string = '';
  cpf: string = '';

  constructor(private afAuth: AngularFireAuth) {} // Injeta o AngularFireAuth

  async onSubmit() {
    // Verificar se todos os campos estão preenchidos corretamente
    if (this.nome && this.senha.length >= 6 && this.email && this.cpf.length === 11) {
      try {
        // Cria o usuário no Firebase Authentication
        const userCredential = await this.afAuth.createUserWithEmailAndPassword(this.email, this.senha);
        console.log('Usuário cadastrado com sucesso:', userCredential.user);

        // Você pode adicionar mais lógica aqui, como salvar informações adicionais no Realtime Database
      } catch (error) {
        console.error('Erro ao cadastrar o usuário:', error);
      }
    } else {
      console.log('Formulário inválido');
    }
  }
  
}
