import { Injectable } from "@angular/core";

interface LogMessageInterface {
  person: string;
  message: string;
  createdAt: Date;
}

@Injectable()
export class AccessLogService {
  logMessages: Array<LogMessageInterface>;

  constructor() {
    this.logMessages = []
  }

  getAccessLog(){
      console.log(this.logMessages);
  }

  addAcccessItem(person: string, message: string){
    const logMessage = {person, message, createdAt: new Date()}
    this.logMessages.push(logMessage);
  }
}
