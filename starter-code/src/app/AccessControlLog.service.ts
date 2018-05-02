import { Injectable } from "@angular/core";

interface Message {
  person: String;
  message: String;
  createdAt: Date;
}

@Injectable()
export class AccessControlLogService {
  logMessages: Array<Message> = [];


  constructor() {}

  addAccessItem(person, message) {
    this.logMessages.push({ person, message, createdAt: new Date() });
    console.log("REGISTRATION SUCCESSFUL");
    return false
  }
  getAccessLog() {
    return this.logMessages;
  }
}
