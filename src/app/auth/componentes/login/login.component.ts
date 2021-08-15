import { ClassGetter } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Usuario } from 'src/app/models/Usuario';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  FormLogin: FormGroup = new FormGroup({
    NombreUsuario: new FormControl('', Validators.required),
    Contrasenna: new FormControl('', Validators.required)
  });

  user: Usuario = new Usuario();
  
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }


  validar(usu: Usuario): void{    

    this.authService.login(usu.user || '', usu.password || '').subscribe({
      next: res => {
        console.log('Usuario Loggeado');
      }, error: err =>{
        console.log(err);
      }
    });    
  }

  ingresar(): void {

    if(this.FormLogin.valid){     
      this.user.user = this.FormLogin.get('NombreUsuario')?.value;
      this.user.password = this.FormLogin.get('NombreUsuario')?.value;
      this.validar(this.user);
    }else {
      console.log('Faltan datos')
    }   

  }
}


