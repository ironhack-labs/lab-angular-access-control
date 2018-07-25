import { Injectable } from '@angular/core';

@Injectable()
export class LogServices {
    logMessages: Array<Object> = []
    constructor() { }

    addAccessItem(myForm) {
        let newMessage = {
            person: myForm.value.person,
            message: myForm.value.message,
            createdAt: new Date()
        }
        this.logMessages.push(newMessage)
        console.log(myForm.value.message)
        console.log("Exito")
    }
    getAccessLog() {
        return console.log(this.logMessages)
    }
}