import {Injectable} from '@angular/core';

@Injectable()
export class AccessControlLog {
    logMessages: Object[] = [];
    constructor() {}

    addAccessItem( p, m ) {
     
        this.logMessages.push({
            person: p ,
            message: m ,
            date: new Date()
        });
    }
    getAccessLog() {
        return this.logMessages;
    }


}
