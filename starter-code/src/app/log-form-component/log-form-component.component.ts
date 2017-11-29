import { Component, OnInit } from '@angular/core';
import { AccessControlLog } from '../../services/AccessControlLog.service'

@Component({
  selector: 'app-log-form-component',
  templateUrl: './log-form-component.component.html',
  styleUrls: ['./log-form-component.component.css']
})
export class LogFormComponentComponent implements OnInit {

  constructor(private accessPeople: AccessControlLog) { }

  ngOnInit() {
  }

  addAccessItem(myForm){
    this.accessPeople.addAccessItem(myForm.value.person, myForm.value.message);
  }

}
