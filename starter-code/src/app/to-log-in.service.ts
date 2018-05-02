import { Injectable } from '@angular/core';


interface Teta{
  person: string;
  message: string;
  createdAt: string;
}
@Injectable()
export class ToLogInService {
  teta: Array<Object> = [];
  constructor() { }

  touch(person, message, createdAt) {
    this.teta.push({person, message, createdAt})
  }

getAccessLog() {
  return this.teta;
}

addAccessItem(person, message) {
this.teta.push({person, message})
}
}