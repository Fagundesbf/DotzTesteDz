import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.scss']
})
export class UserRegistrationComponent implements OnInit {
  isSubmitted = false;
  public emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  userRegistrationForm: FormGroup;
  dddTelefones = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    ) {

    this.userRegistrationForm = this.formBuilder.group({
      nomeCompleto: ['', [Validators.required]],
      apelido: [''],
      cpf: ['', [Validators.required]],
      dddTelefone: [''],
      telefone: [''],
      telefoneCelular: [''],
      email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
      senha: ['', [Validators.required, Validators.minLength(4)]],
      confirmacaoSenha: ['', [Validators.required, Validators.minLength(4)]],
      cep: ['', [Validators.required]],
      logradouro: ['', [Validators.required]],
      numero: [''],
      complemento: [''],
      cidade: ['', [Validators.required]],
      uf: ['', [Validators.required]],
      bairro: ['', [Validators.required]],
    });
    }

    get nomeCompleto() {
      return this.userRegistrationForm.get('nomeCompleto');
    }
    get apelido() {
      return this.userRegistrationForm.get('apelido');
    }
    get cpf() {
      return this.userRegistrationForm.get('cpf');
    }
    get dddTelefone() {
      return this.userRegistrationForm.get('dddTelefone');
    }
    get telefone() {
      return this.userRegistrationForm.get('telefone');
    }
    get telefoneCelular() {
      return this.userRegistrationForm.get('telefoneCelular');
    }
    get email() {
      return this.userRegistrationForm.get('email');
    }
    get senha() {
      return this.userRegistrationForm.get('senha');
    }
    get confirmacaoSenha() {
      return this.userRegistrationForm.get('confirmacaoSenha');
    }
    get cep() {
      return this.userRegistrationForm.get('cep');
    }
    get logradouro() {
      return this.userRegistrationForm.get('logradouro');
    }
    get numero() {
      return this.userRegistrationForm.get('numero');
    }
    get complemento() {
      return this.userRegistrationForm.get('complemento');
    }
    get cidade() {
      return this.userRegistrationForm.get('cidade');
    }
    get uf() {
      return this.userRegistrationForm.get('uf');
    }
    get bairro() {
      return this.userRegistrationForm.get('bairro');
    }

  ngOnInit() {
  }

  submit(userRegistrationForm){
    this.isSubmitted = true;
    if(userRegistrationForm.status == "VALID"){
      console.log('userRegistrationForm', userRegistrationForm);

    }
  }

  buscarCep(){

  }

}
