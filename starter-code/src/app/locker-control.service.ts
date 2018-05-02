import { Injectable } from '@angular/core';

export interface User {
  person: string;
  message: string;
  }
  

@Injectable()
export class LockerControlService {
  
  logMessages : Object[] = [{}];

  constructor() { }

  getAccesLog(){
    return this.logMessages
  }

  addAccessItem(myForm){
    console.log(myForm)
    myForm.resetForm()
    this.logMessages.push(myForm)
    console.log(this.logMessages)
  }

}
