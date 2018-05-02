import { Component, OnInit } from '@angular/core';
import { AccessControlLog } from '../creation.service'

@Component({
  selector: 'app-log-form-component',
  templateUrl: './log-form-component.component.html',
  styleUrls: ['./log-form-component.component.css'],
  providers: [AccessControlLog],
})

export class LogFormComponentComponent implements OnInit {

  person: string;
  message: string;
  success: string;
  user: Object[] = [];
  constructor(private creation : AccessControlLog) { }

  ngOnInit() {
  }

  add(myForm) {
    this.creation.addAccessItem(this.person, this.message);
    this.user = this.creation.getAccessLog();
    myForm.reset();
    this.success = "Message validated";
  }
}
