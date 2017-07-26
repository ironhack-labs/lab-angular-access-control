import { Component, OnInit } from '@angular/core';
import { AccessControlLogService } from '../../services/access-control-log.service';

@Component({
  selector: 'app-access-control',
  templateUrl: './access-control.component.html',
  styleUrls: ['./access-control.component.css'],
  providers: [ AccessControlLogService ]
})
export class AccessControlComponent implements OnInit {
  constructor(private logService: AccessControlLogService) {}
  ngOnInit() {}
}

