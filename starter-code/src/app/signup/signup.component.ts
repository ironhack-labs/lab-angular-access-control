import { Component, OnInit} from '@angular/core';
import { CreationService} from '../services/creationservice';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {

  person: String = "";
  message: String = "";

  constructor() { }

  ngOnInit() {
  }

  submitForm(myForm){
    console.log(myForm.controls.person.value)
    console.log(myForm.controls.message.value)
    console.log(this.person)
    console.log(this.message)
    //Llamo al servicio ¿QUe he de hacer? Tengo que trearme el servicio aqui al componente
    //Despues llamo a la funcion del servicio que quiero utilizar geotlog() o algo asi y le paso 
    // todo el tronco que tengo en myForm... seria bueno guardarlo en una variable
  }
  getAccessLog(myform){};
}
