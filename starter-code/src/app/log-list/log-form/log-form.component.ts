import { Component, OnInit } from '@angular/core';
import { AccessService } from '../../services/access.service'

@Component({
  selector: 'app-log-form',
  templateUrl: './log-form.component.html',
  styleUrls: ['./log-form.component.css']
})
export class LogFormComponent implements OnInit {

  theAccessItem: any = {};

  constructor(private accessThang:AccessService) { }

  ngOnInit() {
  }

  addNewAccessItem(){
      this.accessThang.addAccessItem(this.theAccessItem);
      this.theAccessItem = {};
  }

}
