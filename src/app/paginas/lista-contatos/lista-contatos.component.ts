import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CabecalhoComponent } from '../../Componentes/cabecalho/cabecalho.component';
import { ContainerComponent } from '../../Componentes/container/container.component';
import { ContatoComponent } from '../../Componentes/contato/contato.component';
import { SeparadorComponent } from '../../Componentes/separador/separador.component';
import { FormularioContatoComponent } from '../formulario-contato/formulario-contato.component';

import { RouterLink } from '@angular/router';
import { ContatoService } from '../../services/contato.service';
import { Contato } from '../../Componentes/contato/contato';

@Component({
  selector: 'app-lista-contatos',
  standalone: true,
  imports: [
    CommonModule,
    ContainerComponent,
    CabecalhoComponent,
    SeparadorComponent,
    ContatoComponent,
    FormularioContatoComponent,
    FormsModule,
    RouterLink,
  ],
  templateUrl: './lista-contatos.component.html',
  styleUrl: './lista-contatos.component.css'
})
export class ListaContatosComponent implements OnInit {
  alfabeto: string = 'abcdefghijklmnopqrstuvwxyz'
  contatos: Contato[] = [];

  filtroPorTexto: string = '';

  constructor(private contatoService: ContatoService) {
    
  }

  ngOnInit() {
    this.contatos = this.contatoService.obterContatos();
  }

  private removerAcentos(texto: string): string {
    return texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }

  filtratContatosPorTexto(): Contato[] {
    if (!this.filtroPorTexto) {
      return this.contatos;
    }
    return this.contatos.filter(contato => {
      return this.removerAcentos(contato.nome).toLowerCase().includes(this.removerAcentos(this.filtroPorTexto).toLowerCase());
    })
  }

  filtrarContatosPorLetraInicial(letra: string): Contato[] {

    return this.filtratContatosPorTexto().filter(contato => {
      return this.removerAcentos(contato.nome).toLowerCase().startsWith(this.removerAcentos(letra).toLowerCase());
    });
  }
}
