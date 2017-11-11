import { Injectable } from '@angular/core';
import visitList from './visits';
import * as _ from 'underscore';


@Injectable()
export class VisitListService {

  visits: Object[];
  newVisit: Object = {};
  constructor() { }

  ngOnInit() {
    this.visits = visitList;
  }

  addAccessItem(name, message){
    let newVisit = {
      name: name,
      message: message,

    }
    visitList.push(newVisit);
    console.log(visitList);
  }

  getAccessLog(){
    console.log(visitList);
    return visitList;

  }


  }
