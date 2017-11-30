import { Injectable } from "@angular/core";
import { LogMessage } from "../models/LogMessage";

@Injectable()
export class AccessControlLogService {
  logMessages: LogMessage[] = [];
  newLog = new LogMessage();



  constructor() { }

  addAccessItem(log): void {
    const newLog = {
      name: log.name,
      message: log.message,
      createdAt: new Date
    };
    this.logMessages.push(newLog);
   }

  getAccessLog(): void {
   this.logMessages.forEach((el: LogMessage) => (
     console.log(`${el.name} logged in to ${el.message} at ${el.createdAt}`)
   ));
  }

}
