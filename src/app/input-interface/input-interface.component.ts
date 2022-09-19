import { Component, OnInit } from '@angular/core';
import {Person} from "../business/models/models";
import {IpFhService} from "../business/services/ipFhService.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-input-interface',
  templateUrl: './input-interface.component.html',
  styleUrls: [
    './input-interface.component.css',
    '../shared/shared-styles.scss'
  ]
})
export class InputInterfaceComponent implements OnInit {
  person = new Person();

  constructor(
    private router: Router,
    private ipFhService: IpFhService
  ) {}

  ngOnInit(): void {
  }

  submitPerson() {
    console.log(this.person);
    this.ipFhService.submitPerson(this.person).subscribe();
  }

  navigateTo(input: String) {
    this.router.navigate(['/' + input]).then();
  }
}
