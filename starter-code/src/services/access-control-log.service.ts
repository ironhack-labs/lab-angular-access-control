import { Injectable } from '@angular/core';

export class Player {
  constructor(private person : string, private message : string, private createdAt: Date) {}
  static create (person:string, message:string) {
    return new Player(person, message, new Date())
  }
}

@Injectable()
export class AccessControlLogService {

  logMessages: Array<Player> = []

  constructor() { }

  addAccessItem( person: string, message: string ) {
    this.logMessages.push(Player.create(person, message))
  }

  getAccessLog() {
    return this.logMessages
  }

}
