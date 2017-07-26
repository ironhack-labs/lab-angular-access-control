import { User } from './user';
import { Injectable } from '@angular/core';

@Injectable()
export class AccessControlLogService {

  users: User[] = [];

  getAccessLog():User[] {
    return this.users;
  }

  addAccessItem(person: string, message: string):void {
    const user = new User(person, message);
    this.users.push(user);
  }

}
