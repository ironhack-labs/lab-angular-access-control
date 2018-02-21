import { Injectable } from "@angular/core";

export interface Access {
  person: string;
  message: string;
  createdAt: Date;
}

@Injectable()
export class AccessControlLog {
  logMessages: Array<Access> = [];

  constructor() {}

  addAccessItem(person, message) {
    let newAccess = { person: person, message: message, createdAt: new Date() };
    this.logMessages.push(newAccess);
    this.getAccessLog() 
  }

  getAccessLog() {
    this.logMessages.forEach(l =>{
      console.log(`newUser: ${l.person}, message: ${l.message}, creado: ${l.createdAt}`);
    })
  }
}
