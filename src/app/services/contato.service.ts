import { Injectable } from '@angular/core';

interface Contato {
  id: number
  nome: string
  telefone: string
}

@Injectable({
  providedIn: 'root'
})
export class ContatoService {

  private contatos: Contato[] = []

  constructor() {
    // Obter dados
    const contatosLocalStorageString = localStorage.getItem('contatos');
    const contatosLocalStorage = contatosLocalStorageString ? JSON.parse(contatosLocalStorageString) : null;

    if (contatosLocalStorage !== null) {
      this.contatos = contatosLocalStorage || this.contatos;
    }

    // Salvar dados
    localStorage.setItem('contatos', JSON.stringify(this.contatos));
  }

  obterContatos(): Contato[] {
    return this.contatos;
  }
}
