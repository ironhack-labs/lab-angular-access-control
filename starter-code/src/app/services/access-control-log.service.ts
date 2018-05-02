import { Injectable } from '@angular/core';

@Injectable()
export class AccessControlLog {
    logMessages:Array<Object> = []
    constructor() { }
   
    getAccessLog(): Array<Object> {
        return this.logMessages;
      }
      addAccessItem(myForm): void {
        let nuevoMensaje = {
            person: myForm.value.username,
            message: myForm.value.message,
            createdAt: Date.now()
         }
        console.log(nuevoMensaje);
         this.logMessages.push(nuevoMensaje);
         console.log(this.logMessages);
         
      }
    
    

}