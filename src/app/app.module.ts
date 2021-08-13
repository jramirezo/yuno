import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';

import { FormJuegoComponent } from '../app/componentes/form-juego/form-juego.component';
import { HeaderComponent } from './shared/header/header.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AdminJuegosComponent } from './pages/admin-juegos/admin-juegos.component';
import { AdminJuegosListComponent } from './componentes/admin-juegos-list/admin-juegos-list.component';
import { PerfilJuegoComponent } from './pages/perfil-juego/perfil-juego.component';
import { LandingComponent } from './pages/landing/landing.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { CardGameComponent } from './componentes/card-game/card-game.component';


@NgModule({
  declarations: [
    AppComponent,
    FormJuegoComponent,
    HeaderComponent,
    AdminJuegosComponent,
    AdminJuegosListComponent,
    PerfilJuegoComponent,
    LandingComponent,
    CardGameComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, 
    HttpClientModule, 
    FlexLayoutModule,
    ReactiveFormsModule,
    MatFormFieldModule,    
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatToolbarModule,
    MatTableModule,
    MatPaginatorModule,
    MatCardModule,
    MatIconModule,
    MatListModule,
    MatGridListModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
