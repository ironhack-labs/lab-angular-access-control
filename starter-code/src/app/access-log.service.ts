import { Injectable } from '@angular/core';
import { User } from '../app/user-interface';

@Injectable()
export class AccessLogService {
  logMessages: Array<User> = [];

  constructor() {}

  addAccessItem = (person, message, createdAt = new Date()) => {
    this.logMessages.push({ person, message, createdAt });
    console.log('Register Added:');
    alert('Register Added');
  };

  getAccessLog = () => console.log(this.logMessages)
}
