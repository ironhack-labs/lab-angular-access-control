import { Component, OnInit } from '@angular/core';
import { AccessControlLogService } from '../../shared/services/access-control-log.service';


@Component({
  selector: 'app-log-form',
  templateUrl: './log-form.component.html',
})
export class LogFormComponent{
  formNewPerson: Object = new Object();
  constructor(private service: AccessControlLogService) { }
  
  addPerson():void{        
    this.service.addAccessItem(this.formNewPerson);
  }
  
  getAllLogs():Array<Object>{
    return this.service.getAccessLog();
  }
  
}


