import { Injectable } from '@angular/core';
import { User } from '../user-interface'
@Injectable()
export class AccessControlLog {
    user: Array<User> = [];
    newUser: User;
    
    
    constructor() { }

    getAccessLog() {
      console.log(this.user);
      return this.user;       
    }
    addAccessItem(value) {  
      console.log(value);   
      this.user.push(value);
      console.log(this.user);   

  }
}