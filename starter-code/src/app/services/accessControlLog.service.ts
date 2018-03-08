import { Injectable } from '@angular/core';

@Injectable()

export class accessControlService {
   

    logMessages: Array<Object> = [];
    user: Object=[
      {
      person: String,
      message: String,
      createdAt: Date
    }
  ]

  constructor() { }

 getAccessLog() {

return this.logMessages;
}
addAccessItem(form){
this.logMessages.push(form.value)
console.log(this.logMessages)
  }
}
