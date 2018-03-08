import { Component } from '@angular/core';
import { accessControlService } from './services/accessControlLog.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [accessControlService]
})
export class AppComponent {
  title = 'app works!';
}
