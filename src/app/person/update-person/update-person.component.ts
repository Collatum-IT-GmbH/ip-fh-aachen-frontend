import {Component, Input} from '@angular/core';
import {IpFhService} from "../../business/services/ipFhService.service";
import {Observable} from "rxjs";
import {Person} from "../../business/models/models";

@Component({
  selector: 'app-update-person',
  templateUrl: './update-person.component.html',
  styleUrls: ['./update-person.component.css']
})
export class UpdatePersonComponent {
  id: string = "";
  person$: Observable<Person> | undefined;


  constructor(private ipFhService: IpFhService
  ) {
  }

  submitGetPerson() {
    this.person$ = this.ipFhService.getPerson(this.id);
  }

  submitUpdatePerson(person: Person) {
   this.ipFhService.updatePerson(person).subscribe();
  }
}
