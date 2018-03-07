import { Injectable } from '@angular/core';

@Injectable()
export class LogformServiceService {
  
  accessLog: Array<Object> = [

  ]

  constructor() { }

  getAccessLog(): Array<Object> {
    return this.accessLog;
  }

  addAccessItem(person, message){
    this.accessLog.push( { person: person, message: message, createdAt: new Date()});
    console.log(this.accessLog);
    this.accessLog.forEach(function(item, index){
      console.log((index +1) + ".  Name: " + item['person']);
      console.log("   Message: " + item['message']);
      console.log("   Created at: " + item['createdAt']);
    })
  }

}
