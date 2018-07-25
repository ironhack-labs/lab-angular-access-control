import { Injectable } from '@angular/core';
​
interface Message{
 person: string;
 message: string;
 createdAt: Date;
}

@Injectable()
export class AccessControlLog {
 logMessages: Array<Message> = [];
 addAccessItem(person: string, message: string){
  this.logMessages.push({person, message, createdAt: new Date()})
  console.log('añadido: ' + person + ' ' + message)
 };
 getAccesLog(): Array<Message> {return this.logMessages};
}
