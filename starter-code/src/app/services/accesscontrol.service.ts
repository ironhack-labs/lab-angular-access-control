import { Injectable } from '@angular/core';

@Injectable()
export class AccesControl {
    logMessages : Array<Object> = [
    ];
    constructor() { }


    addRegister(person:string, message:string) {
    let createdAt = new Date();
    let newPerson = {person,message,createdAt};
      this.logMessages.push(newPerson)
    }

    getRegisters() {
      for(var i = 0; i < this.logMessages.length; i++) {
        console.log(this.logMessages[i])
      }

    }
}
