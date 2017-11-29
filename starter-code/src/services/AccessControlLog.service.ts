import { Injectable } from '@angular/core';

interface hola {
     person: string,
      message: string,
      createdAt: Date
}

@Injectable()
export class AccessControlLog {

  logMessages: Array<hola> = [];

  constructor() { }

  getAccessLog() {

    return this.logMessages;
  }

  addAccessItem(person:string, message:string){
    let hola = {
      person,
      message,
      createdAt: new Date ()
    }
      this.logMessages.push(hola); //standing theory
      console.log(`Nuevo mensaje: "${hola.message}", escrito por ${hola.person}. Fecha ${hola.createdAt}`);
  }


}
