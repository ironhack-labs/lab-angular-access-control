import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../../services/people.service'

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  peopleService: PeopleService;

  constructor(peopleService: PeopleService) {
    this.peopleService = peopleService;
  }

  ngOnInit() {
  }

}
