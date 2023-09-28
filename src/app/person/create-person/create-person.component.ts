import { Component, OnInit } from '@angular/core';
import {Person} from "../../business/models/models";
import {IpFhService} from "../../business/services/ipFhService.service";

@Component({
  selector: 'app-create-person',
  templateUrl: './create-person.component.html',
  styleUrls: [
    './create-person.component.css',
    '../../shared/shared-styles.scss'
  ]
})
export class CreatePersonComponent implements OnInit {
  person = new Person();

  constructor(
    private ipFhService: IpFhService
  ) {}

  ngOnInit(): void {
  }

  submitPerson() {
    this.ipFhService.submitPerson(this.person).subscribe();
  }
}
