import { Component, OnInit } from '@angular/core';
import {VisitListService} from '../visit-list.service';
import visitList from '../visits'

@Component({
  selector: 'app-log-form-component',
  templateUrl: './log-form-component.component.html',
  styleUrls: ['./log-form-component.component.css']
})
export class LogFormComponentComponent implements OnInit {

  visits: Object[];
  newVisit: Object = {};

  constructor(private visitAdder: VisitListService){}

  ngOnInit() {
    this.visits = visitList;
  }

addAccessItem(name, message){
  this.visitAdder.addAccessItem(name, message);
}






}
