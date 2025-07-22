import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ContainerComponent } from './Componentes/container/container.component';
import { CabecalhoComponent } from './Componentes/cabecalho/cabecalho.component';
import { SeparadorComponent } from './Componentes/separador/separador.component';
import { ContatoComponent } from './Componentes/contato/contato.component';

interface Contato {
  id: number
  nome: string
  telefone: string
}

import agenda from './agenda.json';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet, ContainerComponent,
    CabecalhoComponent,
    SeparadorComponent,
    ContatoComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  alfabeto: string = 'abcdefghijklmnopqrstuvwxyz'
  contatos: Contato[] = agenda;

  filtrarContatosPorLetraInicial(letra: string) : Contato[] {

    return this.contatos.filter( contato => {
      return contato.nome.toLowerCase().startsWith(letra);
    });
  }
}
