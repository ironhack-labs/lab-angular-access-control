import { Injectable } from '@angular/core';

@Injectable()
export class AccessControlLogService {

  logMessages: Array<Object> = [
    {
      person: "Alex",
      message: "changing clothes",
      createdAt: Date.now()
    },
    {
      person: "Jone",
      message: "changing clothes",
      createdAt: Date.now()
    }
  ]

  constructor() { }

  getAccessLog(): Array<Object> {
    return this.logMessages;
  }

  addAccessItem() {
    
  }

}
