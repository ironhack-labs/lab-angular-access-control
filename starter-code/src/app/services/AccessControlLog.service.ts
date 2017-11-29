import { Injectable } from '@angular/core';

export interface service{
  person:string;
  message:string;
  createdAt:Date;
}
@Injectable()
export class AccessControlLog {
  logMessages: Array<service> = [];

    constructor() { }

  getAccessLog():Array<object> {
    return this.logMessages;
  }
  addAccessItem(ngForm){
    console.log(ngForm)
  }
}
