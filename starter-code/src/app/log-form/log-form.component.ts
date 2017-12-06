import { Component, OnInit } from '@angular/core';
import { AccessLogsService } from '../myservice/access-logs.service'
@Component({
  selector: 'app-log-form',
  templateUrl: './log-form.component.html',
  styleUrls: ['./log-form.component.css']
})
export class LogFormComponent implements OnInit {



  theAccessLog: any = {};

  constructor(public accessThang: AccessLogsService) { }

  ngOnInit() {
  }

  accessSubmit(){
    this.accessThang.addAccessItem(this.theAccessLog);
    this.theAccessLog= {};

  }

}
