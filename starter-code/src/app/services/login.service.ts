import {Injectable} from '@angular/core';

@Injectable()
export class AccessControlLog {
    logs = [];
    itmObject = {person: String, message: String, createdAt: new Date()};


    constructor() { }

    getAccessLog() {
      this.logs.forEach((log)=>{
        console.log("Person: " + log.person + ". Message: " + log.message + ". Entry Time: " + log.createdAt);
      })
    }

    addAccessItem(form) {
      this.itmObject.person = form.value.person;
      this.itmObject.message = form.value.message;
      this.itmObject.createdAt = new Date(new Date().getTime());
      this.logs.push(this.itmObject);
      this.itmObject = {person: String, message: String, createdAt: new Date()};

    }

}
