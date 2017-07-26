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
      return this.logs;
    }
    addAccessItem(person: string, message:string){
      let newObj = {person: person, message: message};
      this.logs.unshift(newObj);
      console.log('LOGS',this.logs);
    }

}
