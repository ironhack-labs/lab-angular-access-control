import { Injectable } from '@angular/core';

@Injectable()
export class AccessControlLogService {
  logMessages: any[] = [];
  constructor() { }

  addAccessItem(person: string, message: string){
    const accessItem = {
      person: person,
      message: message,
      createdAt: new Date()
    }
    this.logMessages.push(accessItem);
  }
  getAccessLog(){
    return this.logMessages;
  }
}
