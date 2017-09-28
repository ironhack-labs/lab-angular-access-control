import { Component, OnInit } from '@angular/core';

import { AccessService } from '../services/access.service';

@Component({
  selector: 'app-log-list',
  templateUrl: './log-list.component.html',
  styleUrls: ['./log-list.component.css']
})
export class LogListComponent implements OnInit {

  constructor(
    private accessThang: AccessService
  ) { }

  ngOnInit() {

  }

  

}
