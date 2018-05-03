import { Injectable } from '@angular/core';

@Injectable()
export class AccessService {

  access: Array<Object> = [
    { person: String },
    { message: String },
    { createdAt: Date }
  ];

  constructor() { }

  add(person: String, message: String, createdAt: Date) {
    // this.persons.push(person);
    // this.messages.push(message);
    // this.dates.push(createdAt)
  }

  getList(): Array<Object> {
    return ;
  }

}
