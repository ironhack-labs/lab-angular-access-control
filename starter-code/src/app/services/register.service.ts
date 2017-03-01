import { Injectable } from '@angular/core';

@Injectable()
export class AccessControlLog {

  logMessages: Array<Object> = [];

  constructor() { }

  getRegisters(): Array<Object>{
       this.logMessages.forEach((logMessage)=> {
         console.log(logMessage);
         return logMessage;
       });

       return this.logMessages;
       // console.log(this.logMessages);
     }


  addRegister(person: string, message: string): void{
    let newRegister = {
      person: person,
      message: message,
      createdAt: new Date
    }
    this.logMessages.push(newRegister);
    console.log(this.logMessages);
  }

}
