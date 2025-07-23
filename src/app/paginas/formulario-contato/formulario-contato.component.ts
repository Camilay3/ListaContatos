import { Component } from '@angular/core';
import { ContainerComponent } from '../../Componentes/container/container.component';
import { CommonModule } from '@angular/common';
import { SeparadorComponent } from '../../Componentes/separador/separador.component';

@Component({
  selector: 'app-formulario-contato',
  standalone: true,
  imports: [
    CommonModule,
    ContainerComponent,
    SeparadorComponent,
  ],
  templateUrl: './formulario-contato.component.html',
  styleUrl: './formulario-contato.component.css'
})
export class FormularioContatoComponent {

}
