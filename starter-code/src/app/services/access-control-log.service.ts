import { Injectable } from '@angular/core';

@Injectable()
export class AccessControlLogService {

  logMessages: Array<Object> = [
    {
      person: String,
      message: String,
      createdAt: Date
    }
  ]

  constructor() { }

  addAccessItems(person: string, message: string){
    this.logMessages.push(person, message)
  }

  getAccessLog(){
    return this.logMessages;
  }

}
