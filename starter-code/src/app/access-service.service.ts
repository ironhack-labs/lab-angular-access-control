import { Injectable } from '@angular/core';

interface logArray {
  person: string;
  message: string;
  createdAt: Date;
}

@Injectable()
export class AccessServiceService {
  log: Array<logArray> = []; //this shit works fine!

  constructor() { }

  getAccessLog() {
    return this.log;
  }

  addAccessItem(person, message) {
    this.log.push({person: person, message: message, createdAt: new Date});
  }

}
