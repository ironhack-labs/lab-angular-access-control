import { Injectable } from '@angular/core';

@Injectable()
export class AccesscontrollogService {
  logMessages: any = [];
  thePerson: any = {};

  constructor() { }

  addAcessItem(person: string, message: string){
    this.thePerson = {
      person: person,
      message: message,
      createdAt: new Date()
    };
    this.logMessages.push(this.thePerson);
  }
  getAccessLog(){
    return this.logMessages;
  }
}
