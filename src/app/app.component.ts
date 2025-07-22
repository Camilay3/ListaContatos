import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ContainerComponent } from './Componentes/container/container.component';
import { CabecalhoComponent } from './Componentes/cabecalho/cabecalho.component';
import { SeparadorComponent } from './Componentes/separador/separador.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet, ContainerComponent,
    CabecalhoComponent,
    SeparadorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  alfabeto: string = 'abcdefghijklmnopqrstuvwxyz'
}
