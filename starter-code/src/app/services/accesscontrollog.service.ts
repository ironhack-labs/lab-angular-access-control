import { Injectable } from '@angular/core';

@Injectable()
export class AccesscontrollogService {
  logMessages: any[] = [];

  constructor() { }

  addAcessItem(theAccess){
    this.logMessages.push(theAccess);
  }
  getAccessLog(){
    return this.logMessages;
  }
}
