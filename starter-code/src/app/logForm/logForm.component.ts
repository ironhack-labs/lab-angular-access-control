import { Component, OnInit } from '@angular/core';
import { AccessControlLogService } from '../access/AccessControlLog.service';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-logForm',
  templateUrl: './logForm.component.html',
  styleUrls: ['./logForm.component.css'],
  providers: [ AccessControlLogService ]
})
export class LogFormComponent implements OnInit {

  constructor(private myService: AccessControlLogService) {

   }
  addAccessItem(value) {
    this.myService.addAccessItem(value.person,value.message);
    console.log(value.person);
    console.log(this.myService.getAccessLog());
  }
  ngOnInit() {
  }

}
