import { Component, OnInit } from '@angular/core';
import { AccessLogService } from '../access-log.service';

@Component({
  selector: 'app-log-form',
  templateUrl: './log-form.component.html',
  styleUrls: ['./log-form.component.css']
})
export class LogFormComponent implements OnInit {
  success:boolean = false;

  constructor(private logService: AccessLogService) { }

  getForm(form){
    this.logService.addAccessItem(form.value.user, form.value.message)
    this.success = true;
    this.logService.getAccessLog().forEach(log=>console.log(log))
  }

  ngOnInit() {
  }

}
