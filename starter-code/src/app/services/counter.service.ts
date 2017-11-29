import { Injectable } from '@angular/core';

interface logs{
  person:string;
  message:string;
  createdAt:Date;
}
@Injectable()
export class AccessControlLog{
  logs: Array<logs> = [];

  constructor() { }

  getAccessLog(){
    return this.logs;
  }
  addAccessItem(person:string,message:string){
    this.logs.push({
      person,
      message,
      createdAt: new Date()
    })
  }
}
