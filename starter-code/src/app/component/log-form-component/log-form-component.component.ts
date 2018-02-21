import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../../services/people.service'


@Component({
  selector: 'app-log-form-component',
  templateUrl: './log-form-component.component.html',
  styleUrls: ['./log-form-component.component.css']
})
export class LogFormComponentComponent implements OnInit {

  peopleService: PeopleService;
  showMsg: boolean = false;
  feedbackEnable: boolean = false;
  proccessing: boolean = false;

  constructor(peopleService: PeopleService) {
    this.peopleService = peopleService;
  }

  ngOnInit() {
  }

  showMessage(){
    this.showMsg = true;
  }

  addAccessItem(form) {
    if(form.valid){
      this.feedbackEnable = true;
      this.proccessing = true;
    } else {
      this.feedbackEnable = false;
      this.proccessing = false;
    }
  }
}
