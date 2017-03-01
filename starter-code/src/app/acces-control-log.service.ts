import { Injectable } from '@angular/core';

@Injectable()
export class AccesControlLogService {
  logMessages: Array<Object> = [];
  person : string;
  message : string;
  createAt : Date;

  constructor() { }

  addRegister(users): void {
    let register = {
      person : users.person,
      message : users.message,
      createAt : new Date()
    }
    this.logMessages.push(register)
    this.getRegisters();

  }

  getRegisters(): Array<Object> {
    console.log(this.logMessages);
    return this.logMessages
    }
}
