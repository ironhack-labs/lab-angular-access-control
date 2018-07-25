import { Component, OnInit } from '@angular/core';
import { AccessControlLog} from '../services/AccessControlLog';

@Component({
  selector: 'app-log-form-component',
  templateUrl: './log-form-component.component.html',
  styleUrls: ['./log-form-component.component.css'],
  providers: [AccessControlLog]
})
export class LogFormComponentComponent implements OnInit {
  person: string;
  message: string;
  user: Object[] = [];
  success: string;
  constructor(private Access : AccessControlLog) {}

  ngOnInit() {
  }
  add(myForm){
    this.Access.addAccessItem(this.person, this.message);
    this.user = this.Access.getAccessLog();
    myForm.reset();
    this.success = "Access validated"
  }
}
