import { Injectable } from '@angular/core';

@Injectable()
export class AccessControLogService {
    logMessages: Array<Object> = [
    {
    person: String,
    message: String,
    createdAt: Date    
    }
];
    newLogMessage: Object = {};

    constructor() { }

    addAccessItem(person, message) {
        console.log(`New message inserted`);
        this.logMessages.push(this.newLogMessage);
    }
    
    getAccessLog() {
        console.log(`Here is the list of visitors`);
        return this.logMessages;
    }
}

