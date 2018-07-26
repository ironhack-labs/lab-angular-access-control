import { Injectable } from '@angular/core';

@Injectable()
export class AccessControlLogService {

  logMessages = []
  success: string = ""

  constructor() { }

  addAccessItem(access){
    this.logMessages.push({person:access.value.person,  message:access.value.message, createdAt: new Date()})
    this.success = "Registro Exitoso"
    setTimeout(()=>{
      this.success = ""
    },3000)
  }

  getAccessLog(){
    console.log( this.logMessages)
  }

}
