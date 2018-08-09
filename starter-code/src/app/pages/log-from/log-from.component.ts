import { Component, OnInit } from '@angular/core';
import { AccessLogService } from '../../services/access-log.service';

@Component({
  selector: 'app-log-from',
  templateUrl: './log-from.component.html',
  styleUrls: ['./log-from.component.css']
})
export class LogFromComponent implements OnInit {

  person: string;
  message: string;
  logs: Array<any>;
  success= false;

  constructor(private logService: AccessLogService) {}

  ngOnInit() {
  }

  submitForm(form){
    if(form.valid){
      this.logService.addAccessItem(this.person,this.message);
      this.success = true;
      setTimeout(() => {
        this.cleanForm();
      }, 2000);
    }
    this.showLogs();
  }

  showLogs(){
    this.logs = this.logService.getAccesLog();
    this.logs.forEach((element) => {
      console.log(element);
    })
  }

  cleanForm(){
    this.success=false;
    this.person="";
    this.message="";
  }

}
