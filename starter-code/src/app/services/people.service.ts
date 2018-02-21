import { Injectable } from '@angular/core';

@Injectable()
export class PeopleService {
  logMessages: Array<Object> = [{}];
  person: string;
  message: string;
  createdAt: Date;
  
  constructor() {
  }

  getAccessLog() {
    return this.logMessages;
  }

  addAccessItem(person, message) {
    console.log(this.logMessages);
    return this.logMessages.push({person, message});
  }
}
