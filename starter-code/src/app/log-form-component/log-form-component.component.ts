import { Component, OnInit } from '@angular/core';
import { myService, Person } from '../../services/myService'

@Component({
  selector: 'app-log-form-component',
  templateUrl: './log-form-component.component.html',
  styleUrls: ['./log-form-component.component.css'],
  providers: [myService]
})
export class LogFormComponentComponent implements OnInit {
  public lista: Array<Person> = []
  constructor(public service:myService) { }

  ngOnInit() {
  }
  submitForm(myForm){
    this.service.addAccessItem(myForm.form._value.person, myForm.form._value.message)
    this.lista = this.service.getAccessLog();

  }
}
