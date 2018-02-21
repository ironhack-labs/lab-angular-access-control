import { Injectable } from '@angular/core';

@Injectable()
export class CreationService {
    logMessages: Array<Object> = [
     {
    person: String,
    message: String,
    createdAt: Date,
    }
    ]

    constructor() { }

    addAccessItem(person,message){
        this.logMessages.push({person,message}); 
        console.log(this.logMessages);
    }

    getAccessLog(person,message) {
     return console.log(this.logMessages);
    };
    
}
