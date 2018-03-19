import { Component, OnInit } from '@angular/core';
import { AccessControlLogService } from '../../services/access/access-control-log.service';

@Component({
  selector: 'app-log-form',
  templateUrl: './log-form.component.html',
  styleUrls: ['./log-form.component.css'],
  providers: [AccessControlLogService],
})
export class LogFormComponent implements OnInit {

  success: boolean;
  accesForm: Array<string> = [];
  person: string;
  message: string;

  constructor(private accesLogForm: AccessControlLogService) { }

  ngOnInit() {
  }

  submitForm(myForm) {
    this.person = myForm.value.person;
    this.message = myForm.value.message;
    this.accesLogForm.addAccessItem(this.person, this.message);
    this.success = !this.success;

    this.accesLogForm.getAccessLog();
  }

}
