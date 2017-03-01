import { Injectable } from '@angular/core';

@Injectable()
export class AccessControlLog {
     logMessages : Array<Object> = [];
    constructor() { }

    addRegister(newPerson){
      // console.log(newPerson);
      this.logMessages.push(newPerson);
      // console.log(this.logMessages);
      console.log(newPerson.person+" "+newPerson.message+" "+newPerson.createdAt);
    }

    getRegisters(){
      console.log(this.logMessages);
    }
}
