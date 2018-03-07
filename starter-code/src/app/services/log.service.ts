import { Injectable } from '@angular/core';

@Injectable()
// Create AccessControlLog Service
export class AccessControlLog {
  logMessages: Array<Object> = [];

  // Add an item to the array with the two parameters it will receive
  addAccessItem(person: string, message: string){
    let theRegister = {
      person,
      message,
      createdAt: new Date()
    }
    this.logMessages.push(theRegister);
  }

  // getAccessLog() that will return the array
  getAccessLog(): Array<Object>{
    return this.logMessages;
  }
}