import { AccessControlLogService } from './shared/access-control-log.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AccessControlLogService]
})
export class AppComponent {
  title = 'app works!';
}
