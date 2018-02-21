import { Injectable } from '@angular/core';

@Injectable()
export class AccessControlLogService {
  logMessages: Array<{person: string, message: string, createdAt: Date}>;

  constructor() { }

  addAccessItem(person, message){

  }

  getAccesLog(){
    return this.logMessages
  }
}
