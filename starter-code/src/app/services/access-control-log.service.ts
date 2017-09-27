import { Injectable } from '@angular/core';

interface USER {
  person: string;
  message: string;
  createdAt: Date;
}

@Injectable()
export class AccessControlLogService {

  logMessages: Array<USER> = [];

  constructor() { }

  addAccessItem(person: string, message: string) {

  }

  getAccessLog(): Array<USER> {
    return 
  }

}
