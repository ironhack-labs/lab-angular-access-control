import { Injectable } from '@angular/core';

@Injectable()
export class AccessControlLogService {
  logMessages: Array<{person: string, message: string, createdAt: Date}>;
  

  constructor() { }

  addAccessItem(person, message){
    
    console.log('We are adding sthg');
  }

  getAccesLog(){
    return this.logMessages
  }
}
