import {Injectable} from '@angular/core';

@Injectable()
export class AccessControlLogService{

  //This way assigns initial values to the Array<object> so types are not enforced.
  // logMessages: Array<Object> = [
  //   {
  //     person: String,
  //     message: String,
  //     createdAt: Date
  //   }
  // ];

  //Better to define it this way so types are enforced to eliminate coding errors
  logMessages: Array<{person: string, message: string, createdAt: Date}> = [];
  constructor() {}

  addAccessItem(_person, _message){
    this.logMessages.push(
      {
        person: _person,
        message: _message,
        createdAt: new Date()
      }
    );
  }

  getAccessLog(){
    return this.logMessages;
  }
  
}