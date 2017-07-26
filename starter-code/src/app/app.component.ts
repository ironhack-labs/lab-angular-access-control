import { Component } from '@angular/core';
import { AccessControlLogService } from 'app/services/access-control-log.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ AccessControlLogService ]
})
export class AppComponent {
  title = 'app works!';
}

