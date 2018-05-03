import { Injectable } from "@angular/core";

export interface Alfonso {
    person: string;
    message: string;
    createdAt: Date;
}

@Injectable()
export class AccessControlLogService {
  logMessages: Array<Alfonso> = [];
  constructor() {}
  getAccessLog() {
    return this.logMessages;
  }
  addAccessItem(person, message) {
    this.logMessages.push({ person, message, createdAt: new Date });
  }
}
