import { Component, OnInit } from '@angular/core';
import { AccessServiceService } from '../access-service.service';

@Component({
  selector: 'app-log-form-component',
  templateUrl: './log-form-component.component.html',
  styleUrls: ['./log-form-component.component.css'],
  providers: [AccessServiceService]
})
export class LogFormComponentComponent implements OnInit {

  constructor(private theAccessService: AccessServiceService) { }

  ngOnInit() {
  }

  addNewPerson(name, message) {
    this.theAccessService.addAccessItem(name, message)
    console.log(this.theAccessService.log);
  }

}
