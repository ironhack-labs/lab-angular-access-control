import { Injectable } from '@angular/core';

@Injectable()
export class AccessLogService {
  constructor() {}
  newLogMessage: {}

  logMessages: Array <any>=[
    {
      person:"",
      message:"",
      createdAt: new Date()
    },
  ]

  getAccessLog(){
    return this.logMessages
  }

  addAccessItem(newLogMessage){
    this.logMessages.push(newLogMessage)
  }
}
