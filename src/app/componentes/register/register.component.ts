import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { User } from '../../interfaces/user';

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
  messageService: any;


  constructor(private fb: FormBuilder, private auth:AuthService,
    private router:Router, private mensaje: MessageService) {

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

  enviarRegistro(){
    const data = {...this.registerForma.value}

    delete data.confirmpassword

    this.auth.registerUser(data as User).subscribe(
      response => {console.log(response)
      this.messageService.add({ 
      severity: 'success', 
      summary: 'Registro exitoso', 
      detail: 'Se ah registrado correctamente el usuario'});
      this.router.navigate(['login'])
      },
        error => console.log(error)
    )
  }
}
