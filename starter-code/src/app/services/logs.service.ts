import { Injectable } from '@angular/core';

@Injectable()
export class LogsService {

  logs: any[] = [];

  constructor() { }

  works: boolean = false;

  getAccessLog() {
    return this.logs;
  }

  addAccessItem(item) {
    console.log("success")
    this.logs.push(item);
    this.works = true;
    this.logs.forEach(log => console.log(log));
  }

}
