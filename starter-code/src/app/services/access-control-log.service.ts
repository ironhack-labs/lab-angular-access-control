import { Injectable } from '@angular/core';

@Injectable()
export class AccessControlLogService {
 logMessages: Info[] = [];

  constructor() { }

  ngOnInit() {
  }

  getAccessLog() {
    return this.logMessages;
  }

  addAccessItem(person, message) {
    const logItem = {
      person: person,
      message: message,
      createdAt: new Date()
    };

    this.logMessages.push(logItem);
  };
}

interface Info {
  person: string;
  message: string;
  createdAt: Date;
}




