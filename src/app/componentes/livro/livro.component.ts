import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

import { Livro } from './livro';
import { BotaoComponent } from '../botao/botao.component';
import { Observable } from 'rxjs';

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

  livro = input.required<Livro>();
  //capaLivro = input.required<string>();

  alternarFavorito() {
    this.livro().favorito = !this.livro().favorito;
  }

}
