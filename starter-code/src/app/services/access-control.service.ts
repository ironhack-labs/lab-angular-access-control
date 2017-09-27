import { Injectable } from '@angular/core';



@Injectable()
export class AccessControlService {
  logMessages:Array<object>=[{}];
  person:string=""
  message:string=""


constructor() { }



getAccessLog(){
  this.logMessages.forEach(function(answer) {
    console.log(answer);
    
});
}

addAccessItem(person,message){
  this.logMessages.push({person:person,message:message});
  this.getAccessLog();

}
}
