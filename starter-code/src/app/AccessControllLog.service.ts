import { Injectable } from '@angular/core';

@Injectable()
export class AccessControllService {
  logMessages: Array<Object> = [];

  constructor(){}

  addAccessItem(person, message){
    let newPerson = {
      person : person,
      message : message,
      createdAt : new Date(),
    }
    this.logMessages.push(newPerson);
    this.getAccessLog();
  }

  getAccessLog(){
    console.log('-----Log Messages Array-----')
    this.logMessages.forEach(e => {
      console.log(e);
    })
  }
}
