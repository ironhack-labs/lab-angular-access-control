import { Injectable } from '@angular/core';

@Injectable()

export class AccessControlLogService {
  logMessages: Array<any> = [];

  constructor() {}

  addAccessItem(name, message) {
    let today = new Date ();
    this.logMessages.push({name, message, today});
    this.logMessages.forEach((elements, index) => {
      console.log(this.logMessages[index].name);
      console.log(this.logMessages[index].message);
      console.log(this.logMessages[index].today);
    });
    
  }

  getAccessLog(): Array<object>  {
    return this.logMessages;
  };

}
