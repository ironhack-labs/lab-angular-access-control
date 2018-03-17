import { Injectable } from '@angular/core';

interface Log {
  person: string,
  message: string,
  data: Date,
}

@Injectable()
export class AccessLogService {
  logMessages: Array<Log> = [] 

  constructor() { }

  getAccessLog() {
    return this.logMessages;
  }

  addAccessItem(form) {
    this.logMessages.push({
      person: form.person,
      message: form.message,
      data: new Date(),
    })
  }

}
