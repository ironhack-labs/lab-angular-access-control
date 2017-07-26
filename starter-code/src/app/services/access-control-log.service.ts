import { Injectable } from '@angular/core';

const logMessage: Array<Object> = [
  {
    person: 'Person1',
    message: 'Message 1',
    createdAt: new Date
  },
  {
    person: 'Person2',
    message: 'Message 2',
    createdAt: new Date
  },
  {
    person: 'Person3',
    message: 'Message 3',
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

      getAccessLog(){
        return logMessage;
      }


}
