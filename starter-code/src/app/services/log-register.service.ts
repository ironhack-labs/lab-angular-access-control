import { Injectable } from '@angular/core';

@Injectable()
export class LogRegisterService {
    registered: Array<Object> = []


  constructor() { }

  getRegisters(){
    return this.registered;
  }

  addReg(obj) {
      let regist = {Person:obj.Name, Message:obj.Message, createdAt: new Date()};
      this.registered.push(regist);
      console.log(this.registered);
  }
}
