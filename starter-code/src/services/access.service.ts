import { Injectable } from '@angular/core';


@Injectable()
export class AccessControlLog {
    logMessages : Array<Object>= [];
    newLogMessage: Object={};
    constructor() { };


    addAccessItem(f){
        this.logMessages.push(f);
        this.getAccessLog();
        console.log(this.logMessages);
    }


    getAccessLog(){
        return this.logMessages;
    }
}

