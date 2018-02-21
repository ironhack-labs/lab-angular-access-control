import { Injectable } from '@angular/core';

@Injectable()
export class AccessControlLogService {
  logMessages: Array<Object> = [];

  constructor() { }

  addAccesItem(person: string, message: string){
    this.logMessages.push({person, message})
    console.log(this.logMessages);
  }

  getAccesLog() {
    return this.logMessages;

  }

}
