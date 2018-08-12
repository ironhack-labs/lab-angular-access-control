import { Component, OnInit } from '@angular/core';
import { LogkeeperService } from '../log-keeper/logkeeper.service';

@Component({
  selector: 'app-log-form-component',
  templateUrl: './log-form-component.component.html',
  styleUrls: ['./log-form-component.component.css'],
  providers:[LogkeeperService]
})
export class LogFormComponentComponent implements OnInit {

  constructor(public _logKeeperService: LogkeeperService) { }

  public logs: Array<object>;
  
  ngOnInit() {
    this.logs = this._logKeeperService.getAccessLog();
  }

  submitForm(myForm){
    if(!myForm.value.person){
      alert("Please fill out your name!")
    } else {
    this.logs.push(this._logKeeperService.addAccessItem(myForm.value.person, myForm.value.message))
    alert("Message Sent!")
    console.log(this.logs)
    }
  }
}
