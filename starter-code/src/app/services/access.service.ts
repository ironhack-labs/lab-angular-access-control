import { Injectable } from '@angular/core';

@Injectable()
export class AccessControlLog {

  logMessages : Array<Object> = [];
  // newLogMessage : Object = {};
    constructor() { }

  getRegisters(): Array<Object>{
    this.logMessages.forEach((logMessage)=> {
      console.log(logMessage);
      return logMessage;
    });

    return this.logMessages;
    // console.log(this.logMessages);
  }

  addRegister(person: string, message: string){
    let newLogMessage = {
      person,
      message,
      createdAt: new Date()
    }
    this.logMessages.unshift(newLogMessage);
    console.log(this.logMessages);
  }

}
