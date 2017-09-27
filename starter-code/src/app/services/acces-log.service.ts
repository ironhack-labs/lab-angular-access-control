import { Injectable } from '@angular/core';

interface AccessObj {
  person: string
  message: string
  createdAt: Date
}

@Injectable()
export class AccesLogService {
  access: Array<AccessObj> = []

  constructor() { }

  getAccessLog() {
    return this.access
  }

  addAccessItem(person: string, message: string) {
    this.access.push({ person: person, message: message, createdAt: new Date() })
    console.log(this.access)
  }
}
