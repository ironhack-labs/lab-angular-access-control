import { Injectable } from '@angular/core';

@Injectable()
export class AccessLogsService {
  accessLogs: any[] = [
    {
      name:   "Alejandro Roman",
      message: "Picking up my helmet",
      date: Date()
    }
  ];

  constructor() { }

  getAccessLog() {
    return this.accessLogs
  }

  addAccessItem(theAccessLog:any) {
    const lastIndex = this.accessLogs.length - 1;
    const lastcontact = this.accessLogs[lastIndex];
    theAccessLog.date = new Date()
    this.accessLogs.push(theAccessLog);
  }

}
