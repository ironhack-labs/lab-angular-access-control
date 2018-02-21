import { Injectable } from '@angular/core';
import {Message} from '../interfaces/message';

@Injectable()
export class AccessControlService {

  logMessages: Message[] = [];
  newMessage: Message = {
    person: '',
    message: '',
    createdAt: 0
  };

  constructor() {
    
   }

  getAccessLog(){
    return this.logMessages;
  }

  addAccessItem(person: string, message: string){
    this.newMessage.person = person;
    this.newMessage.message = message;
    this.newMessage.createdAt = Date.now();
    this.logMessages.push(this.newMessage);
  }

}
