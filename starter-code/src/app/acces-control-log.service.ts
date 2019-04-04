import { Injectable } from '@angular/core';

@Injectable()
export class AccesControlLogService {
  logMessage:Array<object> = [
    {
      person: String,
      message: String,
      createdAt: Date
    }
  ]

  addAccesItem(person, message){
    this.logMessage.push({person, message, createdAt: new Date})
  }

  getAccesLog(){
    return this.logMessage
  }

  constructor() {  
  }
}
