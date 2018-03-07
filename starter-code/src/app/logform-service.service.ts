import { Injectable } from '@angular/core';


@Injectable()
export class LogformServiceService {
    
    accessLog: Array<Object> = [
      
    ]

    ngOnInit(){}

    getAccessLog() {
        return this.accessLog;
    }

    addAccessItem(person, message) {
      this.accessLog.push( {person: person, message: message, createdAt: new Date()} );
      this.accessLog.forEach(function(item, index) {
        console.log((index+1) + ". Name: "  + item['person']);
        console.log("   Message: "  + item['message']);
        console.log("   Date: "  + item['createdAt']);
        console.log();
      })
  }
  
}