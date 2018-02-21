import { Injectable } from '@angular/core';

@Injectable()
export class AccessControLogService {
    logMessages: Array<Object> = [];
    newLogMessage: Object = {

    };

    constructor() { }

    addAccessItem(a) {
        console.log(this.logMessages)
        console.log(`New message inserted`);
        this.logMessages.push(a);
        this.getAccessLog();
    }

    getAccessLog() {
        console.log(this.logMessages);
    }
}

