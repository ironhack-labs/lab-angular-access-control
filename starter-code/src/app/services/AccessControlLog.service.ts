import { Injectable } from "../../../node_modules/@angular/core";
import { create } from "domain";

interface logMessagesInterface{
  person: string,
  message: string,
  createdAt: Date,
}

@Injectable()
export class AccessControlLog {
  logMessages: Array<logMessagesInterface> = []
  getAccessLog(): void {
    console.log(this.logMessages)
  }
  addAccessItem(person: string, message: string): void {
    this.logMessages.push({person, message, createdAt: new Date()});
    this.getAccessLog();
  }
}