import { Injectable } from '@angular/core';

@Injectable()
export class AccessControlLog {
  logMessages: Array<Object> = [];

  constructor() { }

  addRegister(person:string, message:string) {
    var date = new Date();
    var newPerson = {person, message, date}
    console.log(newPerson);

    this.logMessages.push(newPerson);
    console.log(this.logMessages);
  }

  getRegisters(){

    return this.logMessages;

  }

}
