import { Injectable } from '@angular/core';
import { IPerson } from '../interfaces/IPerson';

@Injectable()
export class AccessControlLogService implements IPerson{

  person:string;
  message:string;
  createdAt:Date;

  //Como tenemos el método 'getAccesLog' podemos devolver la variable privada
  private logMessages:Array<IPerson> = [];

  addAccessItem(person:string, message:string){
    const newPerson = {
      person: this.person,
      message: this.message,
      createdAt: new Date()
    }
    this.logMessages.push(newPerson);
  }

  getAccessLog(){
    return this.logMessages;
  }

}
