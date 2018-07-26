import { Injectable } from '@angular/core';




@Injectable()
export class AccessControlLogService {


  person: String;
  message: String;

  // constructor() { }

  logMessages: Array<Object> = [
    {
      person: String,
      message: String,
      createdAt: Date
    }
  ]

  addAccessItem(form) {
    console.log(form.value);
    
    this.person = form.value.name;
    this.message = form.value.message;
    console.log(this.person);
    console.log(this.message);

  }

  getAccessLog(){
    return this.logMessages;
  }
  

}
