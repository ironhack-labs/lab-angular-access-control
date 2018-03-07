import { Component, OnInit } from '@angular/core';
import { AccessControlLogService } from '../access-control-log.service';

@Component({
  selector: 'log-form',
  templateUrl: './log-form.component.html',
  styleUrls: ['./log-form.component.css'],
  providers: [AccessControlLogService]
})
export class LogFormComponent implements OnInit {
      person: string;
      message: string;
      success: string;
  constructor(private AccessFunctions: AccessControlLogService) { }
    
  ngOnInit() {
  }

  add(){
    if (this.person !== ''){
    this.AccessFunctions.addAccessItem(this.person, this.message)
    console.log(this.AccessFunctions.getAccessLog())
    this.success = this.person + " is logged."
    } else if (this.message !== ''){
        this.AccessFunctions.addAccessItem(this.person, this.message)
        console.log(this.AccessFunctions.getAccessLog())
        this.success = this.person + " is logged."
    } else {
      this.success= "Please Fill In All Fields"
    }

  }
}
