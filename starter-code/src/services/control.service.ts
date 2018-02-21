import { Injectable } from '@angular/core';

@Injectable()
export class ControlService {
    gente: Array<Object> = []
    
    newGente: Object={};


    constructor() { }

    addAccessItem(pm){
        this.gente.push(pm)
        this.getAccessLog();
        console.log(this.gente)
    }

    getAccessLog(){
        return this.gente;
    }

    

}

