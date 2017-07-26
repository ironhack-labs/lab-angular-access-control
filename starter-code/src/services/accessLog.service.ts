import { Injectable } from '@angular/core';

// interface LogInterface {
//   person: string;
//   message: string;
//   createdAt: Date;
// }


@Injectable()
export class AccessControlLog {

    private logs: Array<any> = [];
    // person: string;
    // message: string;
    createdAt: Date;

    constructor() {
      this.createdAt = new Date();
    }
    getAccessLog(){
      return console.log(this.logs);
    }
    addAccessItem(person: string, message:string){
      this.createdAt = new Date();
      let newObj = {person: person, message: message, createdAt: this.createdAt};
      this.logs.unshift(newObj);
      this.getAccessLog();
    }

}
