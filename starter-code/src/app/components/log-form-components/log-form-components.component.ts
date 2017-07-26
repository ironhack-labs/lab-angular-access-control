import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AccessControlLogService } from '../../services/access-control-log.service'

@Component({
  selector: 'app-log-form-components',
  templateUrl: './log-form-components.component.html',
  styleUrls: ['./log-form-components.component.css'],
  providers: [AccessControlLogService]
})
export class LogFormComponentsComponent implements OnInit {

  constructor(private theMessage: AccessControlLogService) { }

  ngOnInit() {
  }

  add(form: NgForm) {
    this.theMessage.addAccessItem(form.value.person, 
     form.value.message);
     this.theMessage.getAccessLog().forEach(message => {
        console.log(`Message: ${message.message} Person ${message.person}`);
     });
  }

}
