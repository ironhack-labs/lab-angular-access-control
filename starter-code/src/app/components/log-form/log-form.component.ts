import { Component, OnInit } from '@angular/core';

import { AccessControlLogService } from '../../service/access-control-log.service';

@Component({
  selector: 'app-log-form',
  templateUrl: './log-form.component.html',
  styleUrls: ['./log-form.component.css']
})
export class LogFormComponent implements OnInit {
  person: string = 'foo';
  message: string = 'bar';
  success: boolean = false;

  constructor(private accessControlLogService: AccessControlLogService) {
  }

  ngOnInit() {
  }

  handleClick(){
    this.accessControlLogService.addAccessItem(this.person, this.message)
    this.success = true;
    setTimeout(() => {
      this.success = false;
    }, 2000);
  }
}
