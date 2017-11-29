import { Injectable } from "@angular/core";

interface logMessage {
  person: string;
  message: string;
  createdAt: Date;
}
@Injectable()
export class AccessControlLog {
   logMessage: Array<logMessage> = [];

  constructor() {}

  addAccessItem(person: string, message: string) {
    this.logMessage.push({
      person: person,
      message: message,
      createdAt: new Date()
    });
  }
  getAccessLog() {
    return this.logMessage;
  }
}
