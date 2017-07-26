import { Injectable } from '@angular/core';


const logMessage: Array<Object> = [
  {
    person: 'John',
    message: 'Message 1',
    createdAt: new Date
  },
  {
    person: 'Jack',
    message: 'Message 2',
    createdAt: new Date
  },
  {
    person: 'Jim',
    message: 'Message 3',
    createdAt: new Date
  },
  {
    person: 'George',
    message: 'Message 4',
    createdAt: new Date
  }
];

@Injectable()
export class AccessControlLogService {

  constructor() { }

  addAccessItem(obj) {
    logMessage.push(obj);
    logMessage.forEach((item) => {
      console.log(item);
    });
  }

  getAccessLog() {
    return logMessage;
  }
}
