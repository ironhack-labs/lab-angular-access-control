import { Injectable } from "@angular/core";

// {
//   person: string;
//   message: string;
//   createdAt: Date;
// }

@Injectable()
export class AccessControlLog {

  logMessages: Array<Object> = [];

  
  addAccessItem(person, message){
    let obj = {
      person: person,
      message: message,
      createdAt: new Date()
    }

    this.logMessages.push(obj);

  }

  getAccessLog(){return this.logMessages}
}
