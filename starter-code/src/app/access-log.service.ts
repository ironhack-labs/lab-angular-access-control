import { Injectable } from '@angular/core';
import { SELECT_VALUE_ACCESSOR } from '../../node_modules/@angular/forms/src/directives/select_control_value_accessor';

@Injectable({
  providedIn: 'root'
})
export class AccessLogService {

  constructor() { }

  newEntry: {} = {}

  logMessages: Array<any> = []


  addAccessItem(form){
    //this seems not ideal
    if ((form.value.name.length < 1) || (form.value.message.length < 1)) {
      return
    } else {
      this.newEntry = {
      person: form.value.name,
      message: form.value.message,
      createdAt: Date.now()
      }
      this.logMessages.push(this.newEntry)
    }
    this.getAccessLog();
  }

  getAccessLog(){
    this.logMessages.forEach(function(entry){
      console.log(entry)
    })
  }

}
