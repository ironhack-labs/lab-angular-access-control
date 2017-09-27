import { Injectable } from '@angular/core';

@Injectable()
export class AccessLogService {

  logMessages : Array<Object> = [];
  myForm ={
    person: "",
    message:""
  }

  constructor() {

  }
  getAccessLog() {
    return this.logMessages }

  addAccessItem(myForm){
    this.myForm.person = myForm.person,
    this.myForm.message = myForm.message,
    this.logMessages.push(this.myForm)
  }
}
