import { Component, OnInit } from '@angular/core';
import { AccessControlLogService } from '../../services/access-control-log.service';

@Component({
  selector: 'app-log-form-component',
  templateUrl: './log-form-component.component.html',
  styleUrls: ['./log-form-component.component.css'],
  providers: [AccessControlLogService]
})
export class LogFormComponentComponent implements OnInit {
  user: any = {
    person: '',
    message: '',
    createdAt: new Date
  };

  constructor(private accessControlLog: AccessControlLogService) {}

  addAccessItem(myForm) {
    const access = myForm.value;
    this.accessControlLog.addAccessItem(access);
  }

  ngOnInit() {}
}
