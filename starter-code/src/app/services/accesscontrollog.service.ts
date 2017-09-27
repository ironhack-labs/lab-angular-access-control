import { Injectable } from '@angular/core';

@Injectable()
export class AccesscontrollogService {
  logMessages: any = [];
  constructor() { }

  addAcessItem(person, message){

  }
  getAccessLog(){
    return this.logMessages;
  }
}
