import { Injectable } from '@angular/core'

export class Person {
  constructor(private person:string, private message:string, private createdAt:Date) {}
  static create (person:string, message:string) {
    return new Person(person, message, new Date())
  }
}

@Injectable()
export class AccessControlLog {

    public logMessage:Array<Person> = []

    constructor() { }

    getAccessLog():Array<Person> {
      return this.logMessage
    }
    addAccessItem(person:string, message:string) {
      this.logMessage = [...this.logMessage, Person.create(person, message)]
    }

}
