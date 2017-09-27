import { Component, OnInit } from '@angular/core';
import { AccesscontrollogService } from '../services/accesscontrollog.service';

@Component({
  selector: 'app-logformcomponent',
  templateUrl: './logformcomponent.component.html',
  styleUrls: ['./logformcomponent.component.css']
})
export class LogformcomponentComponent implements OnInit {
  theAccess: any = {};
  status: string;

  constructor(
    public accessThing: AccesscontrollogService
  ) { }

  ngOnInit() {
  }

  addNewAccessItem(){
    this.theAccess.createdAt = new Date();
    this.accessThing.addAcessItem(this.theAccess);
    this.status = "Success";
    this.theAccess = {};
  }

}
