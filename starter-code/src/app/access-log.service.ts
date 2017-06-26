import { Injectable } from '@angular/core';

@Injectable()
export class AccessLogService {

  newAccessLog: Object;

  accessLog: Object[] = [
    { person: "Adel", message: "Training", createdAt: Date },
    { person: "Robert", message: "Emotional support", createdAt: Date},
    { person: "Bilbo", message: "Second Breakfast", createdAt: Date}
  ]

  constructor() { }

  addAccessItem(person, message): any {
    this.newAccessLog = {
      person, message, Date
    }
    this.accessLog.push(this.newAccessLog);
  }

  getAccessLog(): Object[] {
    return this.accessLog
  }

}
