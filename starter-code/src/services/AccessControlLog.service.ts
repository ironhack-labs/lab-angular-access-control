import { Injectable } from '@angular/core';

export class Person {
  private createdAt: Date;
  constructor(private person:string, private message:string) {
    this.createdAt = new Date();
  }
  static createNew(person:string, message:string){
    return new Person(person, message);
  }
}

@Injectable()
export class AccessControlLog {
    logMessages: Array<Object> = [];

    constructor() { }

    getAccessLog() {
      return this.logMessages;
    }

    addAccessItem(person:string, message:string) {
      this.logMessages.push(Person.createNew(person, message));
    }

}
