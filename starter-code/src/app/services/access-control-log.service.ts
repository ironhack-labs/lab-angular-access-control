import { Injectable } from '@angular/core';

@Injectable()
export class AccessControlLogService {
  logMessages: Array<{person: string, message: string, createdAt: Date}>;
  newPerson: string;
  newMessage: string;
  newCreatedAt: Date;

  constructor() { }

  addAccessItem(person: string, message: string){
    this.newCreatedAt = new Date();
    this.logMessages.push({person: person, message: message, createdAt: this.newCreatedAt});
    console.log("test");
  }  

  getAccessLog(){
    return this.logMessages;
  }
}
