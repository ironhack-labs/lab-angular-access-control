import { Injectable } from '@angular/core';

@Injectable()
export class AccessControlLogService {

  logMessages: Array<Object> = [];
  

  constructor() { }

  getAccessLog(){
    
    this.logMessages.forEach((access,index) => {      
      console.log("***********************************");
      console.log("Person: " + access['person']);      
      console.log("Message: " + access['message']);
      console.log("Access: " + access['createdAt']);
      console.log("***********************************");
    });

    return this.logMessages;    
  }

  addAccessItem(_person: string, _message: string){
    this.logMessages.push({
      person: _person,
      message: _message,
      createdAt: new Date()
    });
    
    
  }

}
