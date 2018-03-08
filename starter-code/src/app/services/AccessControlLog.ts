import { Injectable } from '@angular/core';

@Injectable()
export class AccessControlLog {
  logMessages: Array<Object> = [];
    user: Object = [
      { 
      person:  String,  
      message: String,
      createdAt: Date
    }
  ];

  constructor() {} 

 addAccessItem(form) {
 this.logMessages.push(form.value);
  console.log(this.logMessages);
 }

 getAccessLog() {
   return this.logMessages;
 }

}
