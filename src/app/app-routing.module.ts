import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminJuegosComponent } from './pages/admin-juegos/admin-juegos.component';

const routes: Routes = [{
  path: 'games', component: AdminJuegosComponent,
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
