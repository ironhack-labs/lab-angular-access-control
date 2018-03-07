import { Injectable } from '@angular/core';

@Injectable()
export class LogService {
  log: Array<Object> = [];

  constructor() {}

  getAccessLog(){
    return this.log;
  }

  addAccessItem(person, message){
    this.log.push({
      person: person,
      message: message,
      date: new Date()
    })
  }
}