import { Injectable } from '@angular/core';

@Injectable()
export class AccesControlService {
logMessages: Array<{}> = [];
  

  constructor() { }

  addAccessItem(person: string, message: string){
    this.logMessages.push({person, message, createdAt: new Date()});
    console.log('Log msessage created');

  }

  getAccessLog(){
    return this.logMessages;
  }
}



