import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AccessLogService {

  constructor() { }

  accessLog: Array<any> = [];
  success = '';

  getAccessLog() {
    return this.accessLog;
  }

  addAccessItem(person, message) {
    const newUser = {
      person: String,
      message: String,
      createdAt: new Date ()
    };

    this.accessLog.push(newUser);


  }
}


