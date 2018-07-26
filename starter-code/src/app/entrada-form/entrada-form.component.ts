import { Component, OnInit } from '@angular/core';
import { PersonalAccessService } from '../personal-access.service'
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-entrada-form',
  templateUrl: './entrada-form.component.html',
  styleUrls: ['./entrada-form.component.css']

})
export class EntradaFormComponent implements OnInit {

  constructor(private personaAccess: PersonalAccessService) { }

   

  ngOnInit() {
  }

  subirForm(form){
    console.log(form.value)
    this.personaAccess.anadirEntrada(form.value.persona, form.value.mensaje)
  }

}
