import { Injectable } from '@angular/core';

@Injectable()
export class AccessLogService {
  logMessages: Object[] = [];
   
  constructor() { }


  addAccessItem(name: string, message: string) {
    const data = {
      name,
      message,
      createAt: new Date()
    }

    this.logMessages.push(data);
   // console.log(this.logMessages);

  }

  getAccessLog() {
    return this.logMessages;
  }
}
