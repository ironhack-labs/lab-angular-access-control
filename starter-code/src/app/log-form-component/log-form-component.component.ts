import { Component, OnInit } from "@angular/core";
import { LogServices } from "../services/AccesControlog.service";

@Component({
  selector: "app-log-form-component",
  templateUrl: "./log-form-component.component.html",
  styleUrls: ["./log-form-component.component.css"],
  providers: [LogServices]
})
export class LogFormComponentComponent implements OnInit {
  constructor(public lS: LogServices) {}
  messages: Array<Object> = [];

  ngOnInit() {
    this.messages = this.lS.logMessages;
  }
}
