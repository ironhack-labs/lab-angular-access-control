import { Component } from '@angular/core';

import { AccessControlLogService } from './services/access-control-log.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  constructor(private accessControlLog: AccessControlLogService) {


    setInterval(() => {
      const messages = this.accessControlLog.getAccessLog();
      console.log(messages);
    }, 1000);
   }
}
