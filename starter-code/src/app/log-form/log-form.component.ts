import { Component, OnInit } from "@angular/core";
import {
  ServisioSusanaService,
  Susana
} from "../services/servisio-susana.service";
@Component({
  selector: "app-log-form",
  templateUrl: "./log-form.component.html",
  styleUrls: ["./log-form.component.css"],
  providers: [ServisioSusanaService]
})
export class LogFormComponent implements OnInit {

  susanitas: Array<Susana> = [];
  constructor(private susanita: ServisioSusanaService) {}
  ngOnInit() {}

  susanitaForm(myForm) {
    console.log(myForm);
    const person = myForm.person;
    const message = myForm.message;
    this.susanita.addAccessItem(person, message);
    this.susanitas = this.susanita.getAccessLog();
  }
}
