import { Component, OnInit } from '@angular/core';
import { AccessControlLogService } from '../../access-control-log.service';

@Component({
  selector: 'app-log-form',
  templateUrl: './log-form.component.html',
  styleUrls: ['./log-form.component.css']
})
export class LogFormComponent implements OnInit {

  submit: String

  constructor(private service: AccessControlLogService) { }

  ngOnInit() {

  }

  submitForm(myForm) {
    this.service.addAccessItem(myForm.value.person, myForm.value.message);
    this.submit = 'success'
  }

}
