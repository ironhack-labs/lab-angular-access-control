import { Component, OnInit } from "@angular/core";
import { AccessControlLog } from "../services/accesscontrollog.service";

@Component({
  selector: "app-log-form",
  templateUrl: "./log-form.component.html",
  styleUrls: ["./log-form.component.css"],
  providers: [AccessControlLog]
})
export class LogFormComponent implements OnInit {
  registered: boolean = false;
  a = {
    myperson: "",
    mymessage: ""
  };

  constructor(public theAccess: AccessControlLog) {}

  ngOnInit() {}
  addAccessItem(p, m, x) {
    if (x.invalid == false) {
      this.theAccess.addAccessItem(p, m);
      this.registered = true;
      let arr = this.theAccess.getAccessLog();
      arr.shift();
      arr.forEach(e => {
        console.log(e);
      });
    }
  }
}
