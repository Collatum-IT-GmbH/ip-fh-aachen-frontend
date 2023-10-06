import {Component, Input} from '@angular/core';
import {Person} from "../business/dto/models";

@Component({
  selector: 'app-display-person',
  templateUrl: './display-person.component.html',
  styleUrls: ['./display-person.component.css']
})
export class DisplayPersonComponent {
  @Input() person: Person = new Person()

}
