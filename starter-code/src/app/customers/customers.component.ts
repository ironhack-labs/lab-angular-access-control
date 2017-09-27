import { Component, OnInit } from '@angular/core';
import { PersonService } from '../services/person.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css'],
})
export class CustomersComponent implements OnInit {

  theAccess: any = {}

  constructor(
    private personThing: PersonService
  ) { }

  ngOnInit() {

  }

  addNewAccess(){
    this.personThing.addAccessItem(this.theAccess);
    this.theAccess = {};
  }
}
