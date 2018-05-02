import { Injectable } from '@angular/core';
import { User } from '../user.interface';


@Injectable()
export class AccessControlLog {

  logMessages: Array<User> = [];


  constructor() { }

  getAccessLog() {
    return this.logMessages;
  }
  addAccessItem(form) {
    form.createdAt = new Date() ;
    this.logMessages.push(form);
    console.log(`Usuario creado ${form.username}`);
  }

}
