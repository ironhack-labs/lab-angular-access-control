import {Injectable} from '@angular/core'
import {person} from '../interfaces/person.interface'


@Injectable() 
export class LogService{

  accessLog:Array<person>=[];

  constructor(){}

  getAccessLog(){
    return this.accessLog;
  }

  addAccessItem(item:person){
    this.accessLog.push(item);
  }
}
