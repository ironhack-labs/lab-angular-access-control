import { Component, OnInit } from '@angular/core';
import {AccessControlLogService} from '../service/access-control-log.service';


@Component({
  selector: 'app-log-form',
  templateUrl: './log-form.component.html',
  styleUrls: ['./log-form.component.css'],
  providers: [AccessControlLogService]
})
export class LogFormComponent implements OnInit {

  constructor(private formLog: AccessControlLogService) { }

  ngOnInit() {
  }

  submitForm(myForm) {
    console.log(myForm)
    this.formLog.addAccessItem(myForm.value.name, myForm.value.message);
    console.log(this.formLog);
     this.formLog.getAccessLog().forEach(e => console.log(e["person"]));
  }



}
