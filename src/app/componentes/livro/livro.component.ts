import { CommonModule } from '@angular/common';
import { Component, input, output } from '@angular/core';

import { Livro } from './livro';
import { BotaoComponent } from '../botao/botao.component';
import { Observable } from 'rxjs';
import { LivroService } from '../../services/livro.service';

@Component({
  selector: 'app-livro',
  imports: [
    CommonModule,
    BotaoComponent
  ],
  templateUrl: './livro.component.html',
  styleUrl: './livro.component.css'
})
export class LivroComponent {

  constructor(private livroService: LivroService) {

  }

  livro = input.required<Livro>();
  excluirLivroOutput = output<string>();

  alternarFavorito() {
    this.livro().favorito = !this.livro().favorito;
  }

  excluirLivro(){
    this.excluirLivroOutput.emit(this.livro().id);
  }

}
