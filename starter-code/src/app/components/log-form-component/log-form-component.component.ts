import { Component, OnInit, } from '@angular/core';
import { AccessLogService } from '../../services/access-log.service';

@Component({
  selector: 'app-log-form-component',
  templateUrl: './log-form-component.component.html',
  styleUrls: ['./log-form-component.component.css']
})
export class LogFormComponentComponent implements OnInit {
  
  name: string;
  message: string;
  

  constructor(private accessLogService: AccessLogService) { }

  ngOnInit() {
  }

  handleSubmit() {
    //console.log(this.name);
   this.accessLogService.addAccessItem(this.name, this.message);
   this.name = null;
   this.message = null;
   let userRegister = this.accessLogService.getAccessLog();
   console.log(userRegister);
   
  }

}
