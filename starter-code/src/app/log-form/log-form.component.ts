import { Component, OnInit, OnChanges } from '@angular/core';
import { AccessControlLog } from '../services/access-control-log.service';

@Component({
  selector: 'app-log-form',
  templateUrl: './log-form.component.html',
  styleUrls: ['./log-form.component.css'],
  providers: [
    AccessControlLog
  ]
})
export class LogFormComponent implements OnInit {

  constructor(private accessControl: AccessControlLog) { }

  ngOnInit() {
  }

  formulario(form) {
    this.accessControl.addAccessItem(form);
    console.log(this.accessControl.getAccessLog());
  }

}
