import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminJuegosComponent } from './pages/admin-juegos/admin-juegos.component';
import { LandingComponent } from './pages/landing/landing.component';
import { PerfilJuegoComponent } from './pages/perfil-juego/perfil-juego.component';

const routes: Routes = [
  {  path: 'games', component: AdminJuegosComponent},
  {  path: 'perfil/:idGame', component: PerfilJuegoComponent},
  {  path: '', component: LandingComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
