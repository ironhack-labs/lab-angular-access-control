import { Injectable } from '@angular/core';

@Injectable()
export class AccessControlLogService {

  logMessages: Array<any> = [];

  addAccessItem(person, message){
    this.logMessages.push({person, message});
    this.logMessages.forEach(message =>{
      console.log(`person:${message.person} message:${message.message}`)
    })
  }

  getAccessLog(){
    return this.logMessages;
  }

  constructor() { }

}
