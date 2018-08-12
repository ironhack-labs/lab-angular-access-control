import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogkeeperService {

  logMessages: Array<object> = [];

    constructor() { }
  addAccessItem(person, message){
    let item: Object = {person, message, date: new Date};
    return item;
  }

  getAccessLog() {
    return this.logMessages;
  }

  
}
