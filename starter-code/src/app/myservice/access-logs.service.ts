import { Injectable } from '@angular/core';

@Injectable()
export class AccessLogsService {

  accessLogs: any[]=[
    {
      name: "Armanod",
      message:"me cago ",
      createdAt: Date()
    }
  ];

  constructor() { }

  getAccessLog(){

    return this.accessLogs;
  }


  addAccessItem(blah: any){
    blah.createdAt = new Date();
    this.accessLogs.push(blah);
  }


}
