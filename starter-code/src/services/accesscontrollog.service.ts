import { Injectable } from '@angular/core';

@Injectable()
export class AccessControlLogService {
    person: String;
    message: String;
    createdAt: Date;

    messageLog: Object = {
        person: this.person,
        message: this.message,
        createdAt: this.createdAt
    }
    logMessages: Object[];
    constructor() { }

    addAccessItem(person:String, message:String) {
        this.person= person;
        this.message=message;
    }
    getAccessLog():Object[]{
        return this.logMessages
    }
}