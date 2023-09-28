import {Component} from '@angular/core';
import {IpFhService} from "../../business/services/ipFhService.service";
import {MatDialog} from "@angular/material/dialog";
import {GetPersonDialogComponent} from "./get-person-dialog/get-person-dialog.component";

@Component({
  selector: 'app-get-person',
  templateUrl: './get-person.component.html',
  styleUrls: ['./get-person.component.css']
})
export class GetPersonComponent {
  id: string = "";

  constructor(private ipFhService: IpFhService, private dialog: MatDialog
  ) {
  }

  submitGetPerson() {
    this.dialog.open(GetPersonDialogComponent).componentInstance.person$ = this.ipFhService.getPerson(this.id);
  }

}
