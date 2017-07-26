import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AccessControlLogService } from '../../services/access-control-log.service';

@Component({
  selector: 'app-log-form',
  templateUrl: './log-form.component.html',
  styleUrls: ['./log-form.component.css'],
  providers: [ AccessControlLogService ]
})
export class LogFormComponent implements OnInit {

  constructor(private logService: AccessControlLogService) { }

  ngOnInit() {}

   submitForm(myForm: NgForm) {
    this.logService.addAccessItem(myForm.value.person, myForm.value.message);
    this.logService.getAccessLog().forEach(item => {
    console.log("Person: ", item.person, " Message: ", item.message);
    });
    myForm.reset();
    };
}
