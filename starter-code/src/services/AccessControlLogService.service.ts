import { Injectable } from "@angular/core";

@Injectable()
export class AccessControlLogService {
  logMessages: Array<object> = [
    {
      person: String,
      message: String,
      createdAt: Date
    }
  ];
  constructor() {}

  addAccessItem(form) {
    let { person, message } = form.value;
    const obj = { person, message, createdAt: new Date() }
    console.log(obj)
    this.logMessages.push(obj);
    this.logMessages.forEach(e => {
      console.log(e);
    });
  }

  getAccessLog() {
    return this.logMessages;
  }
}
