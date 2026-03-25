import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GeneroLiterario, Livro } from '../componentes/livro/livro';

@Injectable({
  providedIn: 'root'
})
export class LivroService {

  private api_URL = 'http://localhost:3000/livros';

    generos: GeneroLiterario[] = [
    { id: 'romance', value: 'Romance' },
    { id: 'misterio', value: 'Mistério' },
    { id: 'fantasia', value: 'Fantasia' },
    { id: 'ficcao-cientifica', value: 'Ficção Científica' },
    { id: 'tecnicos', value: 'Técnicos' }
  ];

  constructor(private httpClient: HttpClient) { }

  obterLivros(): Observable<Livro[]> {
    return this.httpClient.get<Livro[]>(this.api_URL);
  }

    organizarLivrosPorGenero() {
    this.generosComLivros = this.generos.map((genero) => ({
      genero,
      livros: this.livros.filter((livro) => livro.genero.id === genero.id)
    }));
  }

}


