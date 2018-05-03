import { Injectable } from '@angular/core';

@Injectable()
export class AccessServiceService {
myArray: Array<object> =  [
    {
        person: String,
        message: String,
        createdAt: Date
    }
];
constructor() { }
    getAccessLog() {
        return this.myArray;
    }
    addAccessItem(person, message) {
        this.myArray.push({person, message});
    }
}
