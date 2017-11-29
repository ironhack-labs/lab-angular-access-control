import { Injectable } from '@angular/core';

interface Logs {
  person:string;
  message:string;
  createdAt:Date;
}
@Injectable()
export class AccessControlLog {
  logs: Array<Logs> = [];

  constructor() { }

  getAccessLog(){
    return this.logs;
  }
  addAccessItem(person:string,message:string) {
    this.logs.push({
      person,
      message,
      createdAt: new Date()
    })
  }
}
