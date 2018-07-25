import { Component } from '@angular/core';
import { AccessControlLog } from 'services/AccessControlLog.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AccessControlLog]
})
export class AppComponent {
  title = 'app works!';
}
