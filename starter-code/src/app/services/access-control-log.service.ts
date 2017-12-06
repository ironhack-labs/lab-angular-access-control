import { Injectable } from '@angular/core';

@Injectable()
export class AccessControlLogService {

  logMessages: any[] = [
      {
          name: "Jane Doe",
          message: "Just sitting around.",
          createdAt: new Date()
      },
      {
          name: "Shane Doe",
          message: "Just standing around.",
          createdAt: new Date()
      },
  ]

  constructor() { }

  addAccessItem(newLogMessage: any) {
      this.logMessages.push(newLogMessage);
  }

  getAccessLog() {
      return(this.logMessages);
  }

}
