import { Injectable } from '@angular/core';

@Injectable()
export class ServiceService {

  constructor() { }

  access: Array<any> = [];

  getAccess() {
    return this.access;
  }

  addAccessPer(person, message){
    let newPer = {
      person,
      message,
      createdAt: new Date()
    };
    this.access.push(newPer)
  }

}
