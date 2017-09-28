import { Injectable } from '@angular/core';

import { LogMessage } from '../models/log-message';

@Injectable()
export class AccessControlLogService {

  logMessages: LogMessage[] = [];

  constructor() { }

  addAccessItem(person, message){

  }

  getAccessLog(){

  }
}
