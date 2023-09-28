import {Component, Input} from '@angular/core';
import {Observable} from "rxjs";
import {Person} from "../../../business/models/models";

@Component({
  selector: 'app-get-person-dialog',
  templateUrl: './get-person-dialog.component.html',
  styleUrls: ['./get-person-dialog.component.css']
})
export class GetPersonDialogComponent {
  @Input() person$: Observable<Person> | undefined;


}
