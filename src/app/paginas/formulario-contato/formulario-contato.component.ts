import { Component, OnInit } from '@angular/core';
import { ContainerComponent } from '../../Componentes/container/container.component';
import { CommonModule } from '@angular/common';
import { SeparadorComponent } from '../../Componentes/separador/separador.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ContatoService } from '../../services/contato.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-formulario-contato',
  standalone: true,
  imports: [
    CommonModule,
    ContainerComponent,
    SeparadorComponent,
    ReactiveFormsModule,
    RouterLink,
  ],
  templateUrl: './formulario-contato.component.html',
  styleUrl: './formulario-contato.component.css'
})
export class FormularioContatoComponent implements OnInit {

  contatoForm!: FormGroup;

  constructor(private contatoService: ContatoService, private router: Router) {

  }

  ngOnInit() {
    this.inicializarFormulario();
  }

  inicializarFormulario() {
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
      const novoContato = this.contatoForm.value;
      this.contatoService.salvarContato(novoContato);

      this.contatoForm.reset();
      this.router.navigateByUrl('/lista-contatos');
    }
  }

  cancelar() {
    this.contatoForm.reset();
  }
}
