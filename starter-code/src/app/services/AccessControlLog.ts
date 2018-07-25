import { Injectable } from '@angular/core';

interface User {
  person: string,
  message: string,
  createdAt: Date
}
@Injectable()
export class AccessControlLog{

  logMessages : Array<User> = [];
   constructor() { }

   addAccessItem(person, message) {
     this.logMessages.push({
       person,
       message,
       createdAt : new Date()
     })
   }
   getAccessLog(){
     return this.logMessages;
   }
}