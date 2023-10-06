import { Component } from '@angular/core';
import {Person} from "../business/dto/models";
import {ApiService} from "../business/services/api.service";

@Component({
  selector: 'app-create-person',
  templateUrl: './create-person.component.html',
  styleUrls: ['./create-person.component.css']
})
export class CreatePersonComponent {
  person: Person = new Person();
  showPerson: boolean = false;

  constructor(
    private apiService: ApiService
  ) {
  }

  showPersonMethod() {
    this.apiService.createPerson(this.person).subscribe(value => {
      console.log(value)
    });
    this.showPerson = true;
  }
}
