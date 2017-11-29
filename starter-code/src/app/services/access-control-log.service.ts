import { Injectable } from '@angular/core';

@Injectable()
export class AccessControlLogService {

  logMessages = [];


  constructor() { }

  addAccessItem(person, message) {
    const newLog: object = {
      name: person,
      message: message,
      createdAt: new Date
    };
    this.logMessages.push(newLog);
   }

  getAccessLog(){
   this.logMessages.forEach(el => (
     console.log(`${el.name} logged in to ${el.message} at ${el.createdAt}`)
   ));
  }

}
