import { Injectable } from '@angular/core';
import { User } from '../app/user-interface';

@Injectable()
export class AccessLogService {
  logMessages: Array<User>;

  getAccessLog = () => this.logMessages;

  addAccessItem(person, message) {
    this.logMessages.push(person, message);
  };
  constructor() {}
}
