import { Injectable } from '@angular/core';

interface Person {
  person:string,
  message:string,
  createdAt:Date,
}

@Injectable()
export class AccessControllog {

    logMessages:Array<Person> = []

    addAccessItem(person, message){
      const newPerson = {
        person : person,
        message : message,
        createdAt : new Date()
      }
      this.logMessages.push(newPerson)
    }

    getAccessLog(){
      return this.logMessages
    }

    }
