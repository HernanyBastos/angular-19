import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
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
    { id: 'tecnicos', value: 'Técnicos' },
    { id: 'suspense', value: 'Suspense' }
  ];

  livros: Livro[] = [];

  constructor(private httpClient: HttpClient) { }

  obterLivros(): Observable<Livro[]> {
    return this.httpClient.get<Livro[]>(this.api_URL);
  }

  organizarLivrosPorGenero(): Observable<Map<string, Livro[]>> {
    return this.obterLivros().pipe(map((livros: Livro[]) => {
      const generosMap: Map<string, Livro[]> = new Map();

      livros.forEach(livro => {
        if (!generosMap.has(livro.genero.id)) {
          generosMap.set(livro.genero.id, []);
        }
        generosMap.get(livro.genero.id)?.push(livro);
      });
      
      return generosMap;
    }));
  }

  adicionarLivro(livro: Livro): Observable<Livro> {
    return this.httpClient.post<Livro>(this.api_URL, livro);
  }

  excluirLivro(id: string): Observable<Livro> {
    const url = `${this.api_URL}/${id}`;
    return this.httpClient.delete<Livro>(url);
  }
  
}


