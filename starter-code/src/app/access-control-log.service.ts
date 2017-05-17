import { Injectable } from '@angular/core';

@Injectable()
export class AccessControlLogService {

  logMessages: Array<any> = [];

  addAccessItem(person, message){
    this.logMessages.push({person, message, createdAt: new Date()});
    this.logMessages.forEach(message =>{
      var dd = message.createdAt.getDate();
      var mm = message.createdAt.getMonth()+1; //January is 0!
      var yyyy = message.createdAt.getFullYear();
      console.log(`person:${message.person} message:${message.message} createdAt:${message.createdAt}`)
    })
  }

  getAccessLog(){
    return this.logMessages;
  }

  constructor() { }

}
