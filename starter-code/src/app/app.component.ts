import { Component, OnInit } from '@angular/core';
import { AccessControlLogService } from './services/access-control-log.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // providers: [AccessControlLogService]
})
export class AppComponent{

  title = 'Access Control';
  
}
