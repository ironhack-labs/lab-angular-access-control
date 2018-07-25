import { Injectable } from '@angular/core';

@Injectable()
export class AccessControlLog {
  logMessages: Array<any> = []
    
  addAccessItem(person, message){
    this.logMessages.push({person,message,date: new Date()})
    console.log("Created")
    this.getAccessLog().forEach(e =>{
      console.log(e)
    })
  }

  getAccessLog(){
    return this.logMessages;
  }
    constructor() { }

    
}