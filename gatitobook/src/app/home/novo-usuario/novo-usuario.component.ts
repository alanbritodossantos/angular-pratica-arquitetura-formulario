import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NovoUsuarioService } from './novo-usuario.service';
import { NovoUsuario } from './novo-usuario';

@Component({
  selector: 'app-novo-usuario',
  templateUrl: './novo-usuario.component.html',
  styleUrls: ['./novo-usuario.component.css'],
})
export class NovoUsuarioComponent implements OnInit {
  novoUsuarioForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private novoUsuarioService: NovoUsuarioService
  ) {}

  ngOnInit(): void {
    this.novoUsuarioForm = this.formBuilder.group({
      email: [''],
      fullName: [''],
      userName: [''],
      password: [''],
    });
  }

  cadastrar() {
    // const novoUsuario = this.novoUsuarioForm.getRawValue() as NovoUsuario;
    const novoUsuarioValue = this.novoUsuarioForm.value as NovoUsuario;
    const novoUsuarioGetRawValue = this.novoUsuarioForm.value as NovoUsuario;
    console.log('1: ',novoUsuarioValue);
    console.log('2: ',novoUsuarioGetRawValue);
  }
}
