import { Component, OnInit } from '@angular/core';
import { AccessControlLogService } from '../../services/access-control-log.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-log-form',
  templateUrl: './log-form.component.html',
  styleUrls: ['./log-form.component.css'],
  providers: [AccessControlLogService]
})
export class LogFormComponent implements OnInit {

  submitSuccess: boolean = false;

  constructor(private accessControlLog: AccessControlLogService) { 
    
  }

  ngOnInit() {
  }

  submitForm(logForm: NgForm) {
    this.accessControlLog.addAccessItem(logForm.value.person, logForm.value.message);
    this.submitSuccess = true;
    this.accessControlLog.logMessages.forEach((item, index) => {
      console.log(`${index + 1}: Person: ${item.person} - Message: ${item.message}`);
    });
   
    logForm.resetForm();
    setTimeout(() => { 
      this.submitSuccess = false;
    }, 3000);
  }
}
