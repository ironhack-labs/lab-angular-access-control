import { Component, OnInit } from '@angular/core';
import { AccessControlLogService } from '../../services/access-control-log.service';

@Component({
  selector: 'app-log-form',
  templateUrl: './log-form.component.html',
  styleUrls: ['./log-form.component.css']
})
export class LogFormComponent implements OnInit {

  newMessage: Object = {
    createdAt: new Date
  };

  constructor(private AccessService: AccessControlLogService) { }

  ngOnInit() {
  }

  submitForm(form) {
    this.AccessService.addAccessItem(this.newMessage);
  }

}
