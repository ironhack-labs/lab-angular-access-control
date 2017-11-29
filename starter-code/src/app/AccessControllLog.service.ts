import { Injectable } from '@angular/core';

@Injectable()
export class AccessControllService {
  logMessages: Array<Object> =[{
    person : String,
    message : String,
    createdAt : Date,
  }];

  constructor(){}

  addAccessItem(person, message){
    console.log(person, message);
  }

  getAccessLog(){
    return this.logMessages;
  }
}
