import { Component, OnInit } from '@angular/core';
import { AccessControlLogService } from '../services/access-control-log.service';

@Component({
  selector: 'app-log-form-component',
  templateUrl: './log-form-component.component.html',
  styleUrls: ['./log-form-component.component.css']
})
export class LogFormComponentComponent implements OnInit {
  control: Boolean = false;
  constructor(private accessControl: AccessControlLogService) { }

  access(form) {
    this.accessControl.addAccessItem(form.value.person, form.value.message);
    this.control = true;
  }

  ngOnInit() {
  }

}
