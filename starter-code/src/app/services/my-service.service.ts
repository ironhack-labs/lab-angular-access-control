import { Injectable } from '@angular/core';

@Injectable()
export class MyServiceService {
  log: Array<Object> = [];
  

  constructor() { }

getAccessLog(){
  console.log("History:", this.log)
  return this.log;
}

addAccessItem(person: string, message: string) {
 this.log.push({
   person: person , 
   message: message , 
   createdAt: Date()
  })
console.log("the log from service: ", this.log)
}

}
