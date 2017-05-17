import { Component, OnInit } from '@angular/core';
import{ AccessControlLogService } from '../service/access-control-log.service';

@Component({
  selector: 'app-log-form-component',
  templateUrl: './log-form-component.component.html',
  styleUrls: ['./log-form-component.component.css'],
  providers: [AccessControlLogService]
})
export class LogFormComponentComponent implements OnInit {
  dismissed : boolean = true;
  constructor(private controlLog: AccessControlLogService) { }

  ngOnInit() {
  }
  addMessage(person,message){
    if(!person||!message){
      return
    }
    this.controlLog.addAccessItem(person,message);
    this.dismissed = false;
    setTimeout(()=>{
      this.dismissed = true;
    },1000)

  }
  showAll(message){
  console.log(this.controlLog.getAccessLog());
  }
  clean(){
    this.dismissed = true;
  }

}
