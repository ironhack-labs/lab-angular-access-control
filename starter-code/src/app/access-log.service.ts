import { Injectable } from '@angular/core';
import { User } from '../app/user-interface';

@Injectable()
export class AccessLogService {
  logMessages: Array<User>=[];

  constructor() {}

  addAccessItem = (person, message) => {
    let newRegister = {
      person,
      message,
      createdAt: new Date()
    };
    this.logMessages.push(newRegister);
  }

  getAccessLog = () => this.logMessages;


}
