import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from 'src/app/auth/componentes/login/login.component';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  admin: boolean = false; 

  constructor(public dialog: MatDialog, private router:Router) { }

  ngOnInit(): void {

    if(localStorage.getItem('user')!== null){
      this.admin =true;
    }
  }

  login(): void {
    const dialogRef = this.dialog.open(LoginComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
      this.router.navigate(['']);
    });
  }

  logout(): void {
    localStorage.removeItem('user');
    this.admin = false;
    this.router.navigate(['']);
  }

}
