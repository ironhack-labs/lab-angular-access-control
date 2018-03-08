import { Injectable } from '@angular/core';

@Injectable()
export class LogService {
    constructor() { }
    logMessages = []

getAccesLog() {
    return console.log(this.logMessages);
}

addAccessItem(myForm){
    let newUser = {
        person: myForm.value.person,
        message: myForm.value.message,
        createdAt: new Date
    }

    this.logMessages.push(newUser);
    // console.log(newUser);
    this.getAccesLog()
}


}