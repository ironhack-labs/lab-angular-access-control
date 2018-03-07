import {Injectable} from '@angular/core';

@Injectable()
export class AccessControlLog {
    logMessages: Object[] = [];
    constructor() {}

    addAccessItem( p, m ) {
        const newUser = {
            person:  p,
            message: m,
            createdAt: Date
        };
        this.logMessages.push(newUser);
    }
    getAccessLog() {
        return this.logMessages;
    }


}
