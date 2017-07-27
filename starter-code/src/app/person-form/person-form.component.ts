import { Component, OnInit } from '@angular/core'
import {AccessControlLog, Person} from '../../services/AccessControlLog'

@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.css'],
  providers: [AccessControlLog]
})
export class PersonFormComponent implements OnInit {
  public logMessages:Array<Person> = []

  constructor(public service:AccessControlLog) { }

  ngOnInit() {}

  submitForm(myForm) {
    this.service.addAccessItem(myForm.value.person, myForm.value.description)
    this.logMessages = this.service.getAccessLog()
  }
}
