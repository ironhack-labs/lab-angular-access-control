import { Injectable } from '@angular/core';

@Injectable()
export class AccessControlLog{
    access: Array<Object> = [];
    user:
      {
        person: String, 
        message: String,
        createdAt: Date 
      }
    
    constructor() { }

    getAccessLog(){
      return this.access;

    }

    addAccessItem(form){
      this.access.push(form.value)
     console.log(this.access)
    };
}