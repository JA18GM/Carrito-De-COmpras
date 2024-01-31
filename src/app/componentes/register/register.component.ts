import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  registerForma= this.fb.group({
    fullname: ['', [Validators.required]],
    email: ['',[Validators.required, Validators.email]],
    password: ['',[Validators.required, Validators.minLength(8),
      Validators.pattern(/^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/)
    ]],
    confirmpassword: ['',[Validators.required, Validators.minLength(8),
      Validators.pattern(/^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/)
    ]],
  

  }
  );
confirmpassword: any;


  constructor(private fb: FormBuilder) {

  }

  get fullname() {
    return this.registerForma.controls['fullname'];
  }
  get email(){
    return this.registerForma.controls['email'];
  }

  get password(){
    return this.registerForma.controls['password'];
  }
  get confirmPassword(){
    return this.registerForma.controls['confirmpassword'];
  }
}
