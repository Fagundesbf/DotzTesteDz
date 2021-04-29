import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userForm: FormGroup;
  public emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  isSubmitted = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private serviceUser: UserService
    ) {

    this.userForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
      senha: ['', [Validators.required, Validators.minLength(4)]],
    });
    }

    get email() {
      return this.userForm.get('email');
    }
    get senha() {
      return this.userForm.get('senha');
    }

  ngOnInit() {
  }

  submit(userForm){
    this.isSubmitted = true;
    if(userForm.status == "VALID"){
      this.serviceUser.buscarUsario(
        this.userForm.controls['email'].value,
        this.userForm.controls['senha'].value
        ).subscribe((resp)=>{
          if(resp.length > 0 ){
            Swal.fire({
              icon: 'success',
              text: 'Login efetuado!'
            }).then(()=>{
              this.router.navigate(['/home']);
            });
          }else{
            Swal.fire({
              icon: 'error',
              text: 'Usuario não encontrado!'
            });
          }
        })
    }
  }

}
