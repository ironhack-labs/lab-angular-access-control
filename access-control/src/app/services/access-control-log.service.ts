import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccessControlLogService {
  successfullMessage = '';
  user = {
    person: '',
    message: ''
  };

  logMessages: Array<any> = [];
  logUsers: Array<any> = [];

  constructor() { }

  addAccessItem(person: string, message: string) {
    this.user = {
      person: person,
      message: message
    }
    this.logUsers.push(this.user);
    
    if (person && message) {
      this.successfullMessage = 'Correcto!!';
      console.log(this.user);
    }

    this.getAccessLog();
  }

  getAccessLog() {
    console.log(this.logUsers);
    return this.logUsers;
  }
}
