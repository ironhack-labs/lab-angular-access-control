import { Injectable } from '@angular/core';
import { IAccess } from '../interfaces/IAccess';

@Injectable()
export class AccessControlLogService {
  logMessages: Array<IAccess>;

  constructor() { }

  addAccessItem(person: string, message: string) {
      //console.log(`Person: ${this.person} / Message: ${this.message}`);
  }
  getAccessLog() {
    return this.logMessages;
  }
}
