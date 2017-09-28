import { Injectable } from '@angular/core';

@Injectable()
export class AccessService {

  people: any[] = [
    {
      person: 'Joe Blow',
      message: 'Scratching his blow',
      createdAt: new Date(),
    },
    {
      person: 'Team America' ,
      message: 'F*** Yea',
      createdAt: new Date(),
    }
]
  constructor() { }

    addAccessItem(theAccessItem:any) {
      this.people.push(theAccessItem);

    }
}
