import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';


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
    private serviceUser: UserService
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
      confirmacaoSenha: ['', [Validators.required]],
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
      if(this.userRegistrationForm.controls['senha'].value != this.userRegistrationForm.controls['confirmacaoSenha'].value){
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'as senhas são divergentes!'
          }).then(()=>{
            this.userRegistrationForm.controls['senha'].setValue('');
            this.userRegistrationForm.controls['confirmacaoSenha'].setValue('');
          });
      }else{
        let dados=  {
          "nomeCompleto":  this.userRegistrationForm.controls['nomeCompleto'].value,
          "apelido":  this.userRegistrationForm.controls['apelido'].value,
          "email":  this.userRegistrationForm.controls['email'].value,
          "ddd":  this.userRegistrationForm.controls['dddTelefone'].value ? this.userRegistrationForm.controls['dddTelefone'].value : '',
          "telefone":  this.userRegistrationForm.controls['telefone'].value,
          "telefoneCelular":  this.userRegistrationForm.controls['telefoneCelular'].value,
          "cpf":  this.userRegistrationForm.controls['cpf'].value,
          "senha":  this.userRegistrationForm.controls['senha'].value,
          "cep":  this.userRegistrationForm.controls['cep'].value,
          "logradouro":  this.userRegistrationForm.controls['logradouro'].value,
          "numero":  this.userRegistrationForm.controls['numero'].value ? this.userRegistrationForm.controls['numero'].value : 'S/N' ,
          "complemento":  this.userRegistrationForm.controls['cep'].value,
          "cidade": this.userRegistrationForm.controls['cidade'].value,
          "uf":  this.userRegistrationForm.controls['uf'].value,
          "bairro":  this.userRegistrationForm.controls['bairro'].value,
        };

        this.serviceUser.cadastrarUsuario(dados).subscribe((resp)=>{
            Swal.fire({
              icon: 'success',
              text: 'Cadastro efetuado com sucesso!'
            }).then(()=>{
              this.router.navigate(['home'])
            });
          })
      }
    }
  }

  buscarCep(){
    this.serviceUser.buscarPorCep(
      this.userRegistrationForm.controls['cep'].value
    ).subscribe((res)=>{
      this.userRegistrationForm.controls['logradouro'].setValue(res.logradouro);
      this.userRegistrationForm.controls['bairro'].setValue(res.bairro);
      this.userRegistrationForm.controls['cidade'].setValue(res.localidade);
      this.userRegistrationForm.controls['uf'].setValue(res.uf);
      this.userRegistrationForm.controls['dddTelefone'].setValue(res.ddd);
    })
  }
}
