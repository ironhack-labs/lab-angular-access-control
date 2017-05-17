import { Injectable } from '@angular/core';

@Injectable()
export class AccessControlLog {
  logMessages: Array<Object> = [{
      person: "Pepito",
      message: "Hola",
      createdAt: new Date()
    },
    {
      person: "Hery",
      message: "Hello",
      createdAt: new Date()
    },
    {
      person: "Pau",
      message: "Weeeiii",
      createdAt: new Date()
    }
  ];

  constructor() { }

  getAccessLog(){
    return this.logMessages;
  }

  addAccessItem(person: string, message: string){
    let item: Object = {
      person: person,
      message: message,
      createdAt: new Date()
    };
    this.logMessages.push(item);
    console.log(person+" was added to the log");
  }

}
