import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminJuegosComponent } from './pages/admin-juegos/admin-juegos.component';
import { PerfilJuegoComponent } from './pages/perfil-juego/perfil-juego.component';
import { HomeComponent } from './shared/home/home.component';

const routes: Routes = [
  {  path: 'games', component: AdminJuegosComponent},
  {  path: 'prueba-card-juego', component: PerfilJuegoComponent},
  {  path: 'home', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
