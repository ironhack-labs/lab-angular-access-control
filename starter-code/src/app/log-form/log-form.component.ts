import { Component, OnInit } from '@angular/core';
import { Log } from '../model/Log';
import { AccescontrollogService } from '../service/accescontrollog.service';


@Component({
  selector: 'app-log-form',
  templateUrl: './log-form.component.html',
  styleUrls: ['./log-form.component.css']
})

export class LogFormComponent implements OnInit {
  Logs:Log[]=[];
  newLog:Log;

  constructor(private newAccescontrollogService:AccescontrollogService) { 
    
    
  
  }

  ngOnInit() {
  }
}
