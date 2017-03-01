import { Injectable } from '@angular/core';

@Injectable()
export class AccessControlLog {
    logMessages: Array<Object> = [];
    item: Object = {};
    /*item:Array<object> = [
      {person: string=""}, {message: string},{createdAt: date}];*/
    constructor() { }

    addRegister(person: string, message: string) {
      this.item = { person, message, createdAt: new Date()}
      this.logMessages.push(this.item);
      this.getRegisters(this.logMessages);
    }
    getRegisters(log){
     log.forEach(function(item){
       console.log(item.person +" | "+item.message+" | "+ item.createdAt );

     });
    }
}
