import { Injectable } from '@angular/core';

@Injectable()
export class AccessService {

  logMessages: Array<any> = [
    {
      person: '',
      message: '',
      createdAt: Date,
    }
  ];

  constructor() { }

  addAccessItem(person: string, message: string) {

  }

  getAccessLog() {
    return this.logMessages;
  }

}
