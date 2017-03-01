import { Injectable } from '@angular/core';

@Injectable()
export class LogRegisterService {
  logMessages: Object[];
  personToAdd: Object = {};

  constructor() {
    this.logMessages = [];
  }

  getRegisters(){
    return this.logMessages;
  }

  addRegister(person: string, message: string){
    this.personToAdd = {person, message, createdAt: new Date()};
    this.logMessages.push(this.personToAdd);
  }

}
