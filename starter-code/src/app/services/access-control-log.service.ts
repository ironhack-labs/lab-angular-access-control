import { Injectable, OnInit } from '@angular/core';
// import * as _ from 'underscore';

interface logMessageInterfaz {
  person: String; 
  message: String;
  createdAt: Date;
}

@Injectable({
  providedIn: 'root'
})
export class AccessControlLogService{

  logMessages: logMessageInterfaz[] = [];
  
  constructor() { }
  // _.findIndex() & _.findWhere ==> method from 'underscore'

  getAccessLog(){
    return this.logMessages;
  }
  
  addAccessItem(myForm) {
    this.logMessages.push(myForm.value.person, myForm.value.message);
  }
}
