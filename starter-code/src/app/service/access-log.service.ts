import { Injectable } from '@angular/core';
import { Log } from '../models/log';

@Injectable()
export class AccessLogService {

  accessLog: Log[] = [];

  constructor() { }

  getAccessLog() {
    console.log('--------------------------------------------------');
    this.accessLog.forEach(i=>{
      console.log(`Person: ${i.person} | Message: ${i.message} | Date: ${i.createdAt}`);
    });
    console.log('--------------------------------------------------');
  }

  addAccessItem(person, message)  {
      this.accessLog.push({person, message, createdAt: new Date() });
      this.getAccessLog();
  }

}

