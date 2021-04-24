import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { RecuperarContrasennaComponent } from './components/recuperar-contrasenna/recuperar-contrasenna.component';
import { CrearCuentaComponent } from './components/crear-cuenta/crear-cuenta.component';
import { CrearCuentaFormComponent } from './components/crear-cuenta-form/crear-cuenta-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    LoginComponent,
    RecuperarContrasennaComponent,
    CrearCuentaComponent,
    CrearCuentaFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
