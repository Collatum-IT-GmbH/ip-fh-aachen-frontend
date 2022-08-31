import {Injectable} from '@angular/core';
import {HttpClient, HttpHandler} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Person} from "../../models/models";


const SERVICE_API_URL = environment.SERVICE_API_URL

@Injectable({
  providedIn: 'root'
})
export class IpFhService {


  // httpClient = new HttpClient(this.httpHandler);
  constructor(
    // public httpHandler = HttpHandler
  ) {}

  submitPerson(person: Person) {
    const formData = new FormData();
    formData.append(
      "personDto",
      new Blob([JSON.stringify(person)])
    );
    // this.httpClient.post<Person>(`${SERVICE_API_URL} /person/createPerson`, formData);
  }
}
