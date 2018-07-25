import { Injectable, OnInit } from '@angular/core';

import  AccessLogs  from '../accessLog'

@Injectable()
export class ControlLogService implements OnInit{
    logMessages: Array<AccessLogs> =[];
    // newALog: AccessLogs = {
    //   person: "",
    //   message: "",
    //   createdAt:  new Date()
    // }
    constructor() { }

    ngOnInit(){

    }
    addAccessItem(person: string, message: string) {
      let newALog: AccessLogs = {
        person: person,
       message: message,
       createdAt:  new Date()
     }
      this.logMessages.push(newALog);
      this.logMessages.forEach(element => { console.log(`Usuario: ${element.person} / Mensaje ${element.message}`)
        
      });
      console.log(this.logMessages);

    }
    getAccessLog(): Array<AccessLogs>{
      return this.logMessages;
    }
}