import { Injectable } from '@angular/core';
import { UserInterface } from './user-interface'

@Injectable()
export class AccessControlLogService {
  logMessages : Array<UserInterface> = []

  constructor() { }

  addAccessItem(person, message){
    let createdAt = new Date()
    this.logMessages.push({person, message, createdAt})
    console.log(this.logMessages)
  }
  getAccessLog(){
  return this.logMessages
  }
}
