import { Component } from '@angular/core';
import { AccessControlLogService } from './access-control-log.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'app works!';

  constructor (private accessService:AccessControlLogService) {

  }

  ngOnInit() {
    
  }

}