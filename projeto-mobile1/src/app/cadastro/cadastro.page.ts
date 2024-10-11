import { Component } from '@angular/core';

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

  constructor() {}

  onSubmit() {
    // Verificar se todos os campos estão preenchidos corretamente
    if (this.nome && this.senha.length >= 6 && this.email && this.cpf.length === 11) {
      console.log('Formulário enviado com sucesso', { nome: this.nome, senha: this.senha, email: this.email, cpf: this.cpf });
      // Aqui você pode implementar a lógica de envio dos dados, como uma chamada a uma API
    } else {
      console.log('Formulário inválido');
    }
  }
}
