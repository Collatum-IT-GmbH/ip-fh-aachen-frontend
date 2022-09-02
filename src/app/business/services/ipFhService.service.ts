import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Person} from "../models/models";
import {Observable} from "rxjs";

const SERVICE_API_URL = environment.SERVICE_API_URL

@Injectable({
  providedIn: 'root'
})
export class IpFhService {

  constructor(
    private httpClient: HttpClient,
  ) {}

  submitPerson(person: Person): Observable<any>{
    const formData = new FormData();
    formData.append(
      "personDto",
      new Blob([JSON.stringify(person)])
    );
    return this.httpClient.post(`${SERVICE_API_URL} /person/createPerson`, formData);
  }
}
