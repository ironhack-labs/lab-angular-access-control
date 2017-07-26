import { Injectable } from '@angular/core'

class Person {
  constructor(private person:string, private message:string, private createdAt:Date) {}
  static create (person:string, message:string) {
    new Person(person, message, new Date())
  }
}


@Injectable()
export class AccessControlLog {

    private persons:Array<Person>

    constructor() { }

    getAccessLog():Array<Person> {
      return this.persons
    }
    addAccessItem(person:string, message:string) {
      Person.create(person, message)
    }

}
