import { Injectable } from '@angular/core';

@Injectable()
export class AccessControlLogService {

  logMessages: Array<object> = []

  constructor() { }

  addAccessItem(person: string, message: string) {
    let item = {person, message, Date: new Date()}
    this.logMessages.push(item)
    console.log(this.logMessages)
  }

  getAccessLog(){
    return this.logMessages;
  }

}
