import {
  Component,
  OnInit
} from '@angular/core';
import {
  accessControlLog
} from '../../services/accessControlLog.service';

@Component({
  selector: 'app-log-form',
  templateUrl: './log-form.component.html',
  styleUrls: ['./log-form.component.css'],
  providers: [accessControlLog]
})
export class LogFormComponent implements OnInit {

  constructor(private accessControlLog: accessControlLog) {}

  ngOnInit() {}

  addAccessItem(person: string, message: string) {
    this.accessControlLog.addAccessItem(person, message);
  }
  getAccessLog() {
    this.accessControlLog.getAccessLog();
  }
}
