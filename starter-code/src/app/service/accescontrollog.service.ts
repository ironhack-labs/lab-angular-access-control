import { stripGeneratedFileSuffix } from '@angular/compiler/src/aot/util';
import { Injectable } from '@angular/core';
import {Log} from '../model/Log'

@Injectable()
export class AccescontrollogService {

  Logs:Log[]=[];
  newLog:Log;
  

  constructor() { 
    this.newLog = new Log();
  }

  getAccessLog(): Log[] {
    return this.Logs;
    }
    
    addAccessItem(person:string,message:string){
      this.newLog.person=person;
      this.newLog.message=message;
      this.newLog.createAt=new Date();
      this.Logs.push(this.newLog);
      
    }

}
