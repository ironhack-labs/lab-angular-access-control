import { Injectable } from '@angular/core';

@Injectable()
export class AccessControlLogService {
  
  person:String;
  message:String;

  constructor() { }

LogMessages: Array<object> = [
  {
    person: String,
    message: String,
    createdAt: Date,
  }
]

  addAccessItem(person, message){
    console.log("hola")
    this.person = person.value;
    this.message= message.value;
}

getAccessLog(){
  return this.LogMessages;
}

}
