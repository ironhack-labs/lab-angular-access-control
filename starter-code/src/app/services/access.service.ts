import { Injectable } from '@angular/core';

@Injectable()
export class AccessService {

  logMessages: Array<any> = [];
  // item: any = {
  //   person: '',
  //   message: '',
  //   createdAt: Date
  // }

  constructor() { }

  getAccesLog() {
    return this.logMessages;
  }

  addAccessItem(person: string, message: string) {
    const item = {
      person: person,
      message: message,
      createdAt: new Date()
    }

    let offset = this.logMessages.length;

    offset = offset - this.logMessages.push(item);


    return offset === -1;
  }

}
