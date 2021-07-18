import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-juego',
  templateUrl: './form-juego.component.html',
  styleUrls: ['./form-juego.component.css']
})
export class FormJuegoComponent implements OnInit {

  FormJuegos: FormGroup = new FormGroup({
    NombreJuego: new FormControl('', Validators.required),
    PrecioJuego: new FormControl('', Validators.required)
  });

  constructor() { }

  ngOnInit(): void {
  }


  agrergarJuego(): void{
    

  }

}
