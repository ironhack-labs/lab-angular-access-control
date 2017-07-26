import { Injectable } from '@angular/core';

@Injectable()
export class AccessControlLogService {

logMessages: Array<{ person: string, message: string, createdAt: Date}>;


  constructor() { this.logMessages = [];}

  addAccessItem(person: string, message: string) {
    let createdAt = new Date();
    this.logMessages.push({person, message, createdAt })
    this.logMessages.forEach((item) => {
      console.log(item);
    });
  }

 getAccessLog() {
   return this.logMessages;
 }


}
