import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userForm: FormGroup;
  isSubmitted = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    ) {

    this.userForm = this.formBuilder.group({
      email: ['', [Validators.required]],
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
    if(userForm.status == "VALID"){
      console.log('userForm', userForm);

    }
  }

}