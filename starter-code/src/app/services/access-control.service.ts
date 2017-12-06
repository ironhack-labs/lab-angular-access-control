import { Injectable } from '@angular/core';

@Injectable()
export class AccessControlService {

  accessLog:any[] = [
    {person: "Alfonso", message:"Mirin' himself",createdAt: new Date()}
  ]
  constructor() { }

  getAccesslog(){
    this.accessLog.forEach((item)=> {
      console.log(item);
    });
  }

  addAccessItem(theItem :any){

    theItem.createdAt = new Date();
    this.accessLog.push(theItem);

  }
}
