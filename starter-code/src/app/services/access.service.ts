import { Injectable } from '@angular/core';

@Injectable()
export class AccessControlLogService {
    logMessages = [];

    constructor() { }

    addAccessItem(perArg, messArg){
        this.logMessages.push({
            person: perArg,
            message: messArg,
            createdAt: new Date
        });
    }
    getAccessLog(){
        return this.logMessages;
    }

}