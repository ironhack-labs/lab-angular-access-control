import { Component, OnInit } from '@angular/core';
import { AccessControlLogService } from '../../service/access-control-log.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-log-form',
  templateUrl: './log-form.component.html',
  styleUrls: ['./log-form.component.css'],
  providers: [AccessControlLogService]
})
export class LogFormComponent implements OnInit {

  showMessage = false;

  constructor(private accessLog: AccessControlLogService ) { }

  ngOnInit() {
  }

  addAccess(form: NgForm){  
    this.accessLog.addAccessItem(form.value.person, form.value.message);

    this.accessLog.getAccessLog();
    this.showMessage = true;
    form.resetForm(); 

    setInterval(() => {
      this.showMessage = false
    },2000);
  }

  

}
