import { Injectable } from '@angular/core';

@Injectable()
export class AccesControlLogService {
  logMessage:Array<object> 

  addAccesItem(person:string, message:string){
    this.logMessage.push({person, message, createdAt: new Date})
  }

  getAccessLog(){
    return this.logMessage
  }

  constructor() {  
    this.logMessage = [];
  }
}
