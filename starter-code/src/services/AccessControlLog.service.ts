import { Injectable } from '@angular/core';

@Injectable()
export class AccessControlLog {
    private count: number = 0;
    public people: Array<object> = [
      {
        person: 'Marc',
        message: 'Yaiza lo hace muy bien',
        createdAt : Date.now
      },
      {
        person: 'Avello',
        message: 'Canvas rotate es el santo grial',
        createdAt: Date.now
      },
      {
        person: 'Alberto',
        message: 'Yo soy bilingue',
        createdAt: Date.now
      }
    ];

    constructor() {
      this.people = this.people;
     }

    getAccessLog() {
      return this.people;
    }
    getCount(){
        return this.count;
    }
    addAccessItem(individual, mess) {
      this.people.push({
        person: individual,
        message: mess,
        createdAt: Date.now
      })
    }
}