import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Usuario } from 'src/app/models/Usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-crear-cuenta-form',
  templateUrl: './crear-cuenta-form.component.html',
  styleUrls: ['./crear-cuenta-form.component.css']
})
export class CrearCuentaFormComponent implements OnInit {
  public enviado = false;
  public registro: FormGroup;
  public usuario: Usuario;
  constructor(private usuario_servicio: UsuarioService) { 
    this.registro = new FormGroup({
      nombre: new FormControl(null, [Validators.required]),
      correo: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required]),
      telefono: new FormControl(null)
    });
  }

  ngOnInit(): void {
  }

  public crearCuenta(){
    this.enviado = true;
    if(this.registro.invalid)
      return;
    this.usuario = this.registro.value;
    this.usuario_servicio.crearUsuario(this.usuario);

  }

  get campos():any{
    return this.registro.controls;
  }
}
