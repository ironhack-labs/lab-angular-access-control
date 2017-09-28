import { Injectable } from '@angular/core';
import { AccessLogModel } from '../models/access-log';

@Injectable()
export class AccessLogService {

  accessLog: Array<AccessLogModel> = [{
    person: 'John',
    message: 'Hello!',
    createdAt: new Date()
  }];


  constructor() { }

  getAccessLog() {
    return this.accessLog;
  }

  addAccessItem(person, message) {
    this.accessLog.push({person: person, message: message, createdAt: new Date()});
    console.log('Done');
  }

}
