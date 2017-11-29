import { Injectable } from '@angular/core';

@Injectable()
export class ServicesService {
  access : Array<Object> = [{
    person : String,
    message : String,
    createdAt : Date
  }]

  constructor() { }
getAccessLog(){
  return this.access
}
addAccessItem(person, message){
  this.access.push(person, message)
  console.log(this.access)
}
}
