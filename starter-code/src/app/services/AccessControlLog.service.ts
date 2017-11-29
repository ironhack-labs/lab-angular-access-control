import { Injectable } from '@angular/core';

@Injectable()
export class AccessControlLog {
  logMessages: Array<Object> = [];



  addAccessItem(person: String, message: String) {
let createdAt= new Date()
    this.logMessages.push({person, message, createdAt});
    this.logMessages.forEach (function(e){
      console.log(e)
    });

  };

  getAccessLog() {
    return this.logMessages;

  };





  constructor() { }


};
