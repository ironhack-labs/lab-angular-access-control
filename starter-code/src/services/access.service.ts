import { Injectable } from '@angular/core';


@Injectable()
export class AccessControlLog {
    logMessages : Array<Object>= [{
    person : String,
    message : String,
    createAt : Date
    }]
    constructor() { }

    getAccessLog(){
        return this.logMessages;
    }

    addAccessItem(person, message){
        this.logMessages.push(person, message);
    }

}

