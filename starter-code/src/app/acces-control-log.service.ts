import { Injectable } from '@angular/core';

@Injectable()
export class AccesControlLogService {
  logMessages: Array<Object> = [
    {
    person: '',
    message: '',
    createdAt: new Date
    }
  ];

  constructor() { }
  addAccessItem(person, message) {
    this.logMessages.push(person, message);
  };

  getAccessLog(): Array<Object> {
    return this.logMessages ;
    }
  }
