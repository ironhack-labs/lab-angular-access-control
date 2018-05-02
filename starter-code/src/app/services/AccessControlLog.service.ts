import { Injectable } from '@angular/core';
import { UserInterface } from './UserInterface';

@Injectable()
export class AccessControlLog {
  logMessages:Array<UserInterface> = [];
    constructor() { }

  addAccessItem(person, message){
    this.logMessages.push({
      person,
      message,
      createdAt: new Date()
      
    })
    console.log(this.logMessages)
    window.alert("Registration Succesful!");
  }

  getAccessLog(){
    return this.logMessages;
  }
    
}