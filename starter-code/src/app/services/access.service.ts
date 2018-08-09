import { Injectable } from '@angular/core';

@Injectable()
export class AccessService {

  logMessages: Array<any> = [];

  newLogMessages: Array<any> = [
    {
      person: '',
      message: '',
      createdAt: Date,
    }
  ];

  constructor(
  ) { }

  addAccessItem(person: string, message: string) {

    this.newLogMessages = [
      {
        person: person,
        message: message,
        createdAt: Date.now()
      }
    ];

    this.logMessages.push(this.newLogMessages);

    console.log(this.logMessages);
    this.newLogMessages = [
      {
        person: '',
        message: '',
        createdAt: Date,
      }
    ];
  }

  getAccessLog() {
    return this.logMessages;
  }

}
