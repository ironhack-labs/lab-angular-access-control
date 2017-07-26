import { Injectable } from '@angular/core';

export class Person {

public createdAt: Date

constructor(public person: String, public messaje:String) {
  this.createdAt = new Date()
 }

static createNewPerson(person:string,messaje:string){
  return new Person(person,messaje);
}

}


@Injectable()
export class AccessControlLog {

    logMessages: Array<Object> = []

    constructor() { }

getAccessLog() {
  return this.logMessages
}

addAccessItem(person: string, messaje: string) {

  this.logMessages.push(Person.createNewPerson(person,messaje))
}

}
