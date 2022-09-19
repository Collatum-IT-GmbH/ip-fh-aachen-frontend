import { Component, OnInit } from '@angular/core';
import {Person} from "../business/models/models";
import {IpFhService} from "../business/services/ipFhService.service";

@Component({
  selector: 'app-input-interface',
  templateUrl: './input-interface.component.html',
  styleUrls: ['./input-interface.component.css']
})
export class InputInterfaceComponent implements OnInit {
  person = new Person();

  constructor(
    private ipFhService: IpFhService
  ) {}

  ngOnInit(): void {
  }

  submitPerson() {
    console.log(this.person);
    this.ipFhService.submitPerson(this.person).subscribe();
  }
}
