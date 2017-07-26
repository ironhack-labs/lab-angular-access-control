import { Component } from '@angular/core';
import { AccessControlLogService } from './services/access-control-log.service';
import { LogFormComponent } from './components/log-form/log-form.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AccessControlLogService]
})

export class AppComponent {
  title = 'Access Control';

  constructor() { }

    ngOnInit() {
    }
}
