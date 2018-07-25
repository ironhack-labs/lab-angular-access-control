import { Injectable } from '@angular/core';
interface acceso{
    person:string,
    message:string,
    createdAt: Date
}

@Injectable()
export class AccessControlLogService {
   logMessages:Array<acceso>=[]

    constructor() { }
    getAccesLog(){
        return this.logMessages
    }
    addAccessitem(person,message){
        const obj = {
            person,
            message,
            createdAt: new Date
        }
       this.logMessages.push(obj) 
       console.log(this.logMessages)
    }
    // increment() {
    //     this.count++;
    //     console.log(`Count is now ${this.count}`);
    // }
}