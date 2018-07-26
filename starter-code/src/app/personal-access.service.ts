import { Injectable } from '@angular/core';

@Injectable()
export class PersonalAccessService {
  constructor() { }

  entradaDeUsuario: object[] = [];

  conseguirEntradaDeUsuario(){
    return this.entradaDeUsuario
  }

  anadirEntrada(persona, mensaje){
    let nuevaEntrada = {
      persona,
      mensaje,
      createdAt: new Date()
    }
    this.entradaDeUsuario.push(nuevaEntrada);
    console.log(this.entradaDeUsuario)
  }
}
