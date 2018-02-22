import { Injectable } from "@angular/core";

@Injectable()
export class AccessControlLog {
  private servicio:Array<object> = [{
    person: String,
    message: String,
    createdAt: Date
  }];

  constructor() {}

  getAccessLog() {
    return this.servicio;
  }

  addAccessItem(person, message) {
    this.servicio.push({
      person,
      message,
      createdAt: new Date()
    });
    this.servicio.forEach(e => {
      console.log(e[0].person);
    })
  }
}
