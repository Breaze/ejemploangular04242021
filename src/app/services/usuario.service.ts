import { Injectable } from '@angular/core';
import { Usuario } from '../models/Usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor() { }
  public crearUsuario(usuario: Usuario){
    console.log(usuario);
  }
}
