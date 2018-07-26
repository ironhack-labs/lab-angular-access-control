import { Component, OnInit } from '@angular/core';
import { AccessLogService } from '../access-log.service';

@Component({
  selector: 'app-log-form',
  templateUrl: './log-form.component.html',
  styleUrls: ['./log-form.component.css']
})
export class LogFormComponent implements OnInit {
  logForm: Array<any>
  logMessages: Array <any> = []
  
  constructor(private service: AccessLogService) { }

  ngOnInit() {
    this.service.addAccessItem(this.logForm)
  }

  addAccessItem(logForm){
    this.logMessages.push(logForm)
    alert("Usuario creado")
  }

  getForm(logForm){
    console.log(logForm.value)
  }

}
