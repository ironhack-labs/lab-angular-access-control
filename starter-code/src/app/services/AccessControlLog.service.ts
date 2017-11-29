import { Injectable } from '@angular/core';

interface log {
  person: String;
  message: String;
  createAt: Date;
  }

@Injectable()
export class AccessControlLogic {

    logMessages : Array<log>=[];


    addAccessItem(person,message){
      console.log("ESTAMOS AQUI");

       let newItem : log = {
        person : person,
        message : message,
        createAt: new Date()
      }
      this.logMessages.push(newItem);

    }

    getAccesLog():Array<log>{
        return this.logMessages;
      }
}
