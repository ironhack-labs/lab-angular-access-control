import { Component, OnInit } from '@angular/core';
import { AccessControlLogService } from '../services/access-control-log.service'

@Component({
  selector: 'app-log-form-component',
  templateUrl: './log-form-component.component.html',
  styleUrls: ['./log-form-component.component.css'],
	providers: [ AccessControlLogService ]
})
export class LogFormComponentComponent implements OnInit {


  constructor(private accessControl: AccessControlLogService) { }

  ngOnInit() {
  }

	addAccess(login){
		this.accessControl.addAccessItem(login.value.person, login.value.message)
		console.log(this.accessControl.getAccessLog())
	}
}
