import { Injectable } from '@angular/core';

@Injectable()
export class AccessControlLogService {
  logs: Array<Object> = [{person:String, message:String, createdAt:Number}
  ];

  constructor() { }
  getAccessLog(){
  return this.logs;
}

 addAccessItem(object){
   this.logs.push(object)
   console.log("this works",this.logs)
 }
 }
