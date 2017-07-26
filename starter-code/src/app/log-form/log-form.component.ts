import { AccessControlLogService } from './../shared/access-control-log.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-log-form',
  templateUrl: './log-form.component.html',
  styleUrls: ['./log-form.component.css'],
  providers: [AccessControlLogService]
})
export class LogFormComponent implements OnInit {

  constructor(private aclService: AccessControlLogService) { }

  ngOnInit() { }

  addAccessItem(form) {

    if (form.value.person !== '' && form.value.message !== '') {
      this.aclService.addAccessItem(form.value.person, form.value.message);
      this.aclService.getAccessLog().forEach(user => {
        console.log(user.person, user.message, user.createdAt)
      });
    } else {
      // alert('nope')
    }

  }

}
