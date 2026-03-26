export interface Livro {
  id: string;
  titulo: string;
  autoria: string;
  capa: string;
  favorito: boolean;
  genero: GeneroLiterario;
}

export interface GeneroLiterario {
  id: string;
  value: string;
}
