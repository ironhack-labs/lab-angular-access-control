import { Injectable } from "@angular/core";

@Injectable()
export class AccessControlLog {
  logMessages: [
    {
      person: "Dafne";
      message: "Hello there";
      createdAt: "29.11.17";
    },
    {
      person: "Deniz";
      message: "Good bye there";
      createdAt: "29.12.17";
    }
  ];

  addAccessItem(person, message) {}

  getAccessLog(person, message) {
    return this.logMessages;
  }
}
