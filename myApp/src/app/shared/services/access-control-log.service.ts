import { Injectable } from '@angular/core';
import { LogMessages } from '../models/service.model.logMessage';


@Injectable({
  providedIn: 'root'
})
export class AccessControlLogService {
  private logMessages: Array<LogMessages> = [];
  private newMessage: LogMessages = new LogMessages();
  
  constructor() { }
  
  getAccessLog():Array<LogMessages>{
    return this.logMessages;
  }
  addAccessItem(person):void{
    this.logMessages.push(person);   
  }
}
