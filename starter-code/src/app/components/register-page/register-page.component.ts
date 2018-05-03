import { Component, OnInit } from '@angular/core';
import { AccessService } from '../../services/access.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {

  constructor(private AccessService: AccessService) { }

  ngOnInit() {
  }

}
