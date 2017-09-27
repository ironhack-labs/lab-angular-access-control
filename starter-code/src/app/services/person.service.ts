import { Injectable } from '@angular/core';

@Injectable()
export class PersonService {

  customers: any[] = [
    {
      person: 'Emma',
      message: 'Hello',
      createdAt: 'MMM d, y h:mm:ss a'
      }
  ]

  constructor(
  ) { }

  addAccessItem(theAccess: any) {
    this.customers.push(theAccess);
  }

  getAccessLog() {
    return this.customers;
  }
}
