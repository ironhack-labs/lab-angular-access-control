import { Injectable } from '@angular/core';

@Injectable()
export class AccessControlLogService {

  constructor() { }

  logMessages: Array<logMsg > = [ ];

  addRegister(person: String, message: String): void{
    let createdAt = new Date();
    this.logMessages.push({person,message,createdAt});
  }

  getRegister() : Array<Object>{
    return this.logMessages.map(item =>{
      return item.person;
    });
  }
  getLast(){
    console.log(this.logMessages[this.logMessages.length-1].person);
    console.log(this.logMessages[this.logMessages.length-1].message);
  }
}

export class logMsg{
  person: String;
  message: String;
  createdAt: Date;
}
