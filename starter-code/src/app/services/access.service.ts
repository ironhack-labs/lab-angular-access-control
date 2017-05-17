import { Injectable } from '@angular/core';
import { LogFormComponentComponent } from '../log-form-component/log-form-component.component';

@Injectable()
export class AccessControlLog {
  logMessages: Object[] = [];

    constructor() { }

    addAccessItem(person, message) {
      const item = { person: person, message: message , createdAt: new Date() }
      console.log(item)
      this.logMessages.push(item)
    }

    getAccessLog() {
      return this.logMessages;
    }

}
