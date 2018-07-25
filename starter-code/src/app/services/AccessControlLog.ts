import { Injectable } from '@angular/core';

interface access {
  person: string;
  message: string;
  createdAt: Date
}

@Injectable()
export class AccessSControlLog {
  logMessages:Array<access> = [];
  
  constructor() { }

  addAccessItem (person, message) {
    const accessItem = {
      person,
      message,
      createdAt: new Date()
    }
    this.logMessages.push(accessItem)
    console.log(this.logMessages);
  }
  
  getAccessLog () {
    return this.logMessages;
  }
  
}