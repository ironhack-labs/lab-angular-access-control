import { Injectable } from '@angular/core';
import * as _ from 'underscore';

interface logMessages {
  person: String,
  message: String,
  createdAt: Date
}



@Injectable()
export class AccessControlLog {
  logMessages: Array<logMessages> = [];
  person: String;
  message: String;
  createdAt: Date;

  constructor() { }


  addAccessItem(person: string, message: string) {

  }

  getAccessLog() {
    return this.logMessages;
  }

}
