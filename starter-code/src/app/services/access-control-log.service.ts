import { Injectable } from '@angular/core';

@Injectable()
export class AccessControlLogService {

  logMessages: Array<object> = [{
    person: '',
    message: '',
    createdAt: Date
  }]

  constructor() { }

  addAccessItem(person: string, message: string) {

  }

  getAccessLog(){
    return this.logMessages;
  }

}
