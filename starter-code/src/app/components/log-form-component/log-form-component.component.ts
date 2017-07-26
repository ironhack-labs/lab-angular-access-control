import { Component, OnInit } from '@angular/core';
import { AccessControlLogService } from '../../services/access-control-log.service'
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-log-form-component',
  templateUrl: './log-form-component.component.html',
  styleUrls: ['./log-form-component.component.css'],
  providers: [AccessControlLogService]
})
export class LogFormComponentComponent implements OnInit {

  successMessage: string;

  constructor(private accesControl: AccessControlLogService) { }

  ngOnInit() {
  }

  submitForm(myForm: NgForm) {
    this.accesControl.addAccessItem(myForm.value.personLog, myForm.value.messageLog);
    myForm.resetForm();
    this.successMessage = "Success storing log!";
    // This will be better place in its own function in the service:
    let logs = this.accesControl.getAccessLog();
    logs.forEach(log => {
      console.log(`Member: ${log.person} - Message: ${log.message} - At: ${log.createdAt}`);
    })
  }

}
