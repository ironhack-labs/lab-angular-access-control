import { Injectable } from '@angular/core';

@Injectable()
export class AccessControl {
  logMessages: Array <object> = [{
    person: String,
    message: String,
    createdAt: Date
  }]
  getAccessLog(){
    console.log(this.logMessages)
    // return this.logMessages;
  }
  addAccessItem(result){
    console.log(result)
  }
}
