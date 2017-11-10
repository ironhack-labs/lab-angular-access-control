import { Injectable } from '@angular/core';
import visitList from './visits';

@Injectable()
export class VisitListService {

  visits: Object[];
  newVisit: Object = {};
  constructor() { }

  ngOnInit() {
    this.visits = visitList;
  }

  addAccessItem(name, message, date:Date){
    let newVisit = {
      name: name,
      message: message,
      createdAt: date
    }
    visitList.push(newVisit);
  }

  getAccessLog(){
    console.log(visitList);
    return visitList;

  }


  }
