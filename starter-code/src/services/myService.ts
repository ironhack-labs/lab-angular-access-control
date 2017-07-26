import { Injectable } from '@angular/core';

  export class Person {
    constructor (private person:string, private message:string, private createdAt:Date){}
    static create(person:string,message:string){
      return new Person (person,message,new Date());
    }
  }
@Injectable()
export class myService {

    logMessages: Array<Person> = []
    constructor() { }

    getAccessLog(){
     return this.logMessages;
   }

   addAccessItem(person:string,message:string){
    this.logMessages.push(Person.create(person,message));
    console.log(this.logMessages);
   }


}
