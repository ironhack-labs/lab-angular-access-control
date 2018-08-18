import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccessControlService
{
  logMessages: Array<object> = [];

  constructor () { }
  
  getAccessLog ()
  {
    return this.logMessages;
  }

  addAccessItem (person:string, message:string)
  {
    let newObj: object = Object.assign({person, message});
    Object.defineProperty( newObj, "createdAt", { value: new Date() } );
    this.logMessages.push( newObj );
    newObj = {};
  }
}
