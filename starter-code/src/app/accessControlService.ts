import { Injectable } from '@angular/core';

@Injectable()
export class accessControl {
    accessLog: Array<Object>=[];

    addAccessItem(person, message) {
        let date = new Date();
        let log = {
            person,
            message,
            date
        }
        this.accessLog.push(log);
    }

    getAccessLog() {
        console.log(this.accessLog);
    }
}