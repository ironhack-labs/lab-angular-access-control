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
    person = ""
    console.log("REGISTRATION SUCCESSFUL");
    console.log(this.getAccessLog())
    return false
  }
  getAccessLog() {
    return this.logMessages;
  }
}
