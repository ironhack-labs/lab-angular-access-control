import { Component, OnInit } from '@angular/core';

import { AccessControllog } from '../acess.service';

@Component({
  selector: 'app-log-form-component',
  templateUrl: './log-form-component.component.html',
  styleUrls: ['./log-form-component.component.css'],
  providers:[AccessControllog]
})
export class LogFormComponentComponent implements OnInit {

  constructor(private theAcess:AccessControllog) { }

  addPerson(person,message,suc){
    this.theAcess.addAccessItem(person,message)
    suc.classList.remove("hidden")
    console.log(this.theAcess.getAccessLog())
  }
  ngOnInit() {
  }

}
