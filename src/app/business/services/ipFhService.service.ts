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

  submitPerson(person: Person): Observable<Person>{
    return this.httpClient.post<Person>(`${SERVICE_API_URL}/person`, person);
  }
}
