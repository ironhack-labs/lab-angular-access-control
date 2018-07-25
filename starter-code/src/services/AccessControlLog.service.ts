import { Injectable } from '@angular/core';

@Injectable()
export class AccessControlLog {

  logMessages: Array<any> = [
    {
      name: String, 
      message: String, 
      createdAt: Date,
    }]


    addAccessItem(person,message){
      this.logMessages.push({person,message,createdAt: new Date()})
      console.log("success")
      this.getAccesLog().forEach(element => {
        console.log(element)  
      });
    }
    getAccesLog(){
      console.log(this.logMessages)  
      return this.logMessages
    }
  constructor() { }

}
