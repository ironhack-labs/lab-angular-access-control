import {Injectable} from "@angular/core";

export interface Messages {
  person:string,
  message:string,
  createdAt: Date
}

@Injectable()
export class AccessControlLog {
  private logMessages:Array<Messages> = [];

  addAccessItem(person,message){
    this.logMessages.push({
      person, 
      message, 
      createdAt : new Date()
    })
    this.logMessages.forEach( m => {
      console.log(`Person: ${m.person}`)
      console.log(`Message: ${m.message}`)
      console.log("-------")
    })
  }
  getAccessLog(){
    return this.logMessages[this.logMessages.length - 1];
  }
}
