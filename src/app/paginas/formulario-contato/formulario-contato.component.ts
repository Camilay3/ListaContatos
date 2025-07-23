import { Component } from '@angular/core';
import { ContainerComponent } from '../../Componentes/container/container.component';
import { CommonModule } from '@angular/common';
import { SeparadorComponent } from '../../Componentes/separador/separador.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-contato',
  standalone: true,
  imports: [
    CommonModule,
    ContainerComponent,
    SeparadorComponent,
    ReactiveFormsModule,
  ],
  templateUrl: './formulario-contato.component.html',
  styleUrl: './formulario-contato.component.css'
})
export class FormularioContatoComponent {

  contatoForm!: FormGroup;

  constructor() {
    this.contatoForm = new FormGroup({
      nome: new FormControl('', Validators.required
      ),
      telefone: new FormControl('', Validators.required),
      email: new FormControl('', Validators.email),
      aniversario: new FormControl(''),
      redes: new FormControl(''),
      observacoes: new FormControl('')
    })
  }

  salvarContato() {
    if (this.contatoForm.valid) {

    }
  }

  cancelar() {

  }
}
