import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearCuentaComponent } from './components/crear-cuenta/crear-cuenta.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path: '', redirectTo:"/home", pathMatch:'full'},
  {path: 'home', component: HomeComponent},
  {path: 'crear_cuenta', component: CrearCuentaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
