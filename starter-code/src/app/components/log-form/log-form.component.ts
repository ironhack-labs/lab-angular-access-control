import { Component, OnInit } from '@angular/core';

import { AccessControlLogService } from '../../service/access-control-log.service';

@Component({
  selector: 'app-log-form',
  templateUrl: './log-form.component.html',
  styleUrls: ['./log-form.component.css']
})
export class LogFormComponent implements OnInit {
  formModel = {
    person: 'fooiii',
    message: 'bar'
  }
  success: boolean = false;

  constructor(private accessControlLogService: AccessControlLogService) {
  }

  ngOnInit() {
  }

  handleSubmitForm(form){
    console.log(form)
    this.accessControlLogService.addAccessItem(this.formModel.person, this.formModel.message)
    this.success = true;
    setTimeout(() => {
      this.success = false;
    }, 2000);
  }
}
