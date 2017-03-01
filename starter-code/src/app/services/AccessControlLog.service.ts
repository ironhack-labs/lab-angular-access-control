import { Injectable } from '@angular/core';

@Injectable()
export class AccessControlLog {
  logMessages: Array<Object> = [];
  person: string;
  message: string;
  createdAt: Date;
  logObj: Object;

  constructor() { }

  getRegisters(){
    return this.logMessages;
  }

  addRegister(person: string, message: string) {
    this.createdAt = new Date();
    this.logObj = {
      person: person,
      message: message,
      createdAt: this.createdAt
    }
    this.logMessages.push(this.logObj);
    console.log(this.logMessages)
  }
}
