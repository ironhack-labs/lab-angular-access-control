import { Injectable } from "@angular/core";

interface User {
  person: string;
  message: string;
  createdAt: Date;
}

@Injectable()
export class AccessControlLogService {
  logMessages: Array<User> = [];

  constructor() {}

  addAccessItem(form) {
    this.logMessages.push({
      person: form.person,
      message: form.message,
      createdAt: new Date()
    });
    this.getAccessLog();
  }

  getAccessLog() {
    this.logMessages.forEach((message, index) => {
      console.log(`message nº${index}`, message);
    });
    return this.logMessages;
  }
}
