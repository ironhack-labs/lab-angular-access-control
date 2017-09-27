import { Injectable } from '@angular/core';

interface Access{
  person: string;
  message: string;
  createAt: any;
}

@Injectable()
export class AccessService {

    logMessage: Array<Access> = []


    constructor() { }

    getAccessLog() {
      return this.logMessage
    }
    addAccessItem(person, message){

      this.logMessage.push({person:person, message:message, createAt: new Date()})
      console.log(this.logMessage)
    }
}
