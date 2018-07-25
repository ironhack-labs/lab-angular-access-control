import { Injectable } from '@angular/core';

@Injectable()
export class AccessControlLogService {
    
    constructor() { }

    logMessages: Array<object> = [
        {
            person: String,
            message: String,
            createdAt: Date
        }
    ];
    
    getAccessLog() {
        return this.logMessages;
    }

    addAccessItem(person, message) {
        console.log("submit form ok");
        this.logMessages.push({person: person, message: message});
        console.log(this.logMessages)
    }
}