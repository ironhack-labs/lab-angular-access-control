import { Injectable } from '@angular/core';


@Injectable()

export class AccessControlLog {
  logMessages: Array<Object>=[];
  person: string = '';
  message: string = '';
  createdAt: Date;
  i:number = 0


  constructor(){}

 addRegister(person:string , message:string ){
   var date = new Date();
   var newPerson = {person,message,date};
   this.logMessages.push(newPerson);
   this.getRegisters()




 }


getRegisters(){
  this.i = 0
  for(this.i=0; this.i < this.logMessages.length; this.i++){
    let item = this.logMessages[this.i]
      console.log(item)
}

}



}
