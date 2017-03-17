import { Component, OnInit } from '@angular/core';
import { AccessService } from '../access.service';
@Component({
  selector: 'app-log-form',
  templateUrl: './log-form.component.html',
  styleUrls: ['./log-form.component.css'],
  providers: [AccessService]
})
export class LogFormComponent implements OnInit {
  newEntry = {};
  success = false;
  constructor(private acc: AccessService) { }

  ngOnInit() {
  }
  addAccessItems(items) {
    // console.log(items);
    // console.log(this.newEntry);
    const newEntry = {
      person: items.person,
      message: items.message
    }
    this.acc.addAccessItem(newEntry.person, newEntry.message);
    this.success = true;
  }
}
