import { Component, OnInit } from '@angular/core';
import { AccessControlLogService } from '../AccessControlLog.service'

@Component({
  selector: 'app-log-form',
  templateUrl: './log-form.component.html',
  styleUrls: ['./log-form.component.css'],
  providers: [AccessControlLogService]
})
export class LogFormComponent implements OnInit {
person:string
message:string

  constructor(private theAccess:AccessControlLogService) { }

  ngOnInit() {
  }

addItem(myForm){
this.theAccess.addAccessItem(this.person, this.message)
alert("Registration Successfull");
myForm.resetForm()
}

}
