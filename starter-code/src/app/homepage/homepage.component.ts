import { Component, OnInit } from '@angular/core';
import { AccessLogService } from '../services/access-log.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  
  constructor( private accessLogService: AccessLogService ) { }


  
  ngOnInit() { 
    this.accessLogService.addAccessItem('oscar', 'jana');

  }

}
