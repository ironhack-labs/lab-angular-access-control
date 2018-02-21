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
    constructor() {
        this.logMessages= [];
     }

    addAccessItem(person:String, message:String) {
        this.person= person;
        this.message=message;
        let date= new Date;
        this.logMessages.push({person, message, date})
    }
    getAccessLog():Object[]{
        return this.logMessages
    }
}