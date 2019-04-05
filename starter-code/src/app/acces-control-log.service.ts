import { Injectable } from '@angular/core';
import { logMess } from './logMess'

@Injectable()

export class AccesControlLogService {

  logMessage:Array<logMess>;

  constructor() {  
    this.logMessage = [];
  }

  addAccesItem(person, message){
    console.log (person,message)
    this.logMessage.push({person, message, createdAt: new Date})
    console.log(this.logMessage)
  }

  getAccesLog(){
    return this.logMessage
  }

  
}
