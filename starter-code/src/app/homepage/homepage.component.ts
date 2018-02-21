import { Component, OnInit } from '@angular/core';
import { AccessLogService } from '../services/access-log.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  
  constructor( private accessLogService: AccessLogService ) { }

  // Why is this not working? How do we test if App is working without a form?
  // this.accessLogService.addAccessItem();

  ngOnInit() { }

}
