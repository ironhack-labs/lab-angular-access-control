import { Injectable } from '@angular/core';

@Injectable()
export class AccessControlLogService {
  logMessages: Array<Object> = [];
  constructor() { }

  addAccessItem(person, message) {
    let item: Object = {person, message};
    this.logMessages.push(item)
    this.logMessages.forEach((message) => {
      console.log(message);
    })
    return item["person"];
  };

  getAccessLog() {
    return this.logMessages;
  };
}
