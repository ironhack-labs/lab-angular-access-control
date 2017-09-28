import { Injectable } from '@angular/core';
import { UserLog } from '../models/user'

@Injectable()
export class AccesControlLog {

  logMessages:UserLog[] = [];

  constructor() { }

  getAccessLog() {
    return this.logMessages;
  }

  addAccesItem(person:string, message:string) {
    let newUser = this.createNewUserLog(person, message);
    this.logMessages.push(newUser);
  }

  private createNewUserLog(person:string, message:string):UserLog {
    return new UserLog(person, message);
  }
}
