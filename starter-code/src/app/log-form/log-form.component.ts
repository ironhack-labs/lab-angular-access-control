import { Component, OnInit } from '@angular/core';
import { AccessLogService } from '../access-log.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-log-form',
  templateUrl: './log-form.component.html',
  styleUrls: ['./log-form.component.css']
})
export class LogFormComponent implements OnInit {



  constructor (private accessLogService: AccessLogService) { }

  form: any = {};
  success = false;

  getForm() {
    console.log(this.form);
    this.accessLogService.addAccessItem(this.form.person, this.form.message);
    this.form.person = '';
    this.form.message = '';
    this.success = true;
    setInterval(() => {
            this.success = false;
    }, 5000);

  }

  ngOnInit() {
  }

}
