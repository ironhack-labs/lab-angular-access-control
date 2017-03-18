import { Injectable } from '@angular/core';

@Injectable()
export class AccessControlLogService {

  logMessages:Array<Object> = [];


getAccessLog() {
  return this.logMessages;
}


addAccessItem(theItem) {
  const currentTime = new Date()
  const thing = {
    person: theItem.person,
    message: theItem.message,
    createdAt: currentTime
  };
  this.logMessages.push(thing);
  console.log(this.logMessages);
};

  constructor() { }

}
