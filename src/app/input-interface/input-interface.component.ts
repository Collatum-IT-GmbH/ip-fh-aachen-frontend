import { Component, OnInit } from '@angular/core';
import {Person} from "../models/models";
import {IpFhService} from "../business/services/ipFhService.service";

@Component({
  selector: 'app-input-interface',
  templateUrl: './input-interface.component.html',
  styleUrls: ['./input-interface.component.css']
})
export class InputInterfaceComponent implements OnInit {

  person = new Person;
  ipFhService = new IpFhService();
  constructor() {}

  ngOnInit(): void {
  }

  submitPerson() {
    this.printPersonToConsole();
    this.ipFhService.submitPerson(this.person);
  }

  printPersonToConsole() {
    console.log(
      "Persönliche Informationen:"
      + "\n"
      + this.person.dateOfBirth
      + "\n"
      + this.person.familyName
      + "\n"
      + this.person.givenName
      + "\n"
      + this.person.email
      + "\n"
      + "\n"
      + "Die Adresse lautet:"
      + "\n"
      + this.person.address.zip
      + "\n"
      + this.person.address.city
      + "\n"
      + this.person.address.street
      + "\n"
      + this.person.address.houseNumber
    );
  }
}
