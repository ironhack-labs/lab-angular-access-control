import { Injectable } from '@angular/core';

@Injectable()
export class AccessControlLog {
    person: string;
    registers : Array<Object> = [];
    message : string;
    createdAt : Date;
    constructor() { }

    getRegisters(){
      return this.registers;
    }

    addRegister(obj){
      let reg = {person : obj.person, message: obj.message, createdAt : new Date()};
      this.registers.push(reg);
    // console.log(obj);
     console.log(this.registers);
    }
}
