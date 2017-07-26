import { Injectable } from '@angular/core';

@Injectable()
export class AccessControlLog {
    // User: Object {
    //   person: string,
    //   messaje: string,
    //   createdAt: new Date()
    // }
    logMessages: Array<any> = [{
      person: String,
      messaje: String,
      createdAt: new Date()
    }]

    constructor() { }

getAccessLog() {
  return this.logMessages
}

addAccessItem(person: string, messaje: string) {
  let member: Object = {
    person : person,
    messaje : messaje
  }
  console.log(member)
  this.logMessages.push(member)
  console.log(this.logMessages)
}

}
