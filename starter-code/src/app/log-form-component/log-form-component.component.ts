import { Component, OnInit } from '@angular/core';
import { AccessControlLog } from '../service/access-control-log.service'

@Component({
  selector: 'app-log-form-component',
  templateUrl: './log-form-component.component.html',
  styleUrls: ['./log-form-component.component.css']
})
export class LogFormComponentComponent implements OnInit {

  constructor(private controlLog: AccessControlLog) { }

  ngOnInit() {
  }

  submitForm(myForm){
    this.controlLog.addAccessItem(myForm.value.name, myForm.value.message);
    this.controlLog.getAccessLog().forEach(l => console.log(l["person"]));
  }

}
