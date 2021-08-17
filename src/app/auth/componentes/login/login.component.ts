import { ClassGetter, THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { User } from '../../../models/User';


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

  user: User = new User();
  
  constructor(private authService: AuthService, 
    public dialogRef: MatDialogRef<LoginComponent>,
     private router:Router,
     private _snackBar: MatSnackBar
   ) { }

  ngOnInit(): void {
  }


  validar(usu: User): void{    

    this.authService.login(usu).subscribe({
      next: res => {
        
        if(res.userName !== null){
          localStorage.setItem('user', 'valido');   
          this.router.navigate(['']);              
        }else{
          this._snackBar.open("No existe el usuario", "cerrar");        
        }
        

      }, error: err =>{
        this._snackBar.open("Hubo un error", "cerrar");     
      }
    });    
  }

  ingresar(): void {
      
    if(this.FormLogin.valid){     
      this.user.userName = this.FormLogin.get('NombreUsuario')?.value;
      this.user.password = this.FormLogin.get('Contrasenna')?.value;      
      this.validar(this.user);
      this.dialogRef.close();

    }else {
      this._snackBar.open("Faltaron datos de ingresar", "cerrar");
    }   

  }
}


