import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
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
  ) {
  }

  submitPerson(person: Person): Observable<Person> {
    return this.httpClient.post<Person>(`${SERVICE_API_URL}/person`, person);
  }

  getPerson(id: string): Observable<Person> {
    return this.httpClient.get<Person>(`${SERVICE_API_URL}/person`, {
        params: new HttpParams().append('id', id)
      }
    )
  }

  updatePerson(person: Person): Observable<Person> {
    return this.httpClient.put<Person>(`${SERVICE_API_URL}/person`, person);
  }

  deletePerson(id: string): Observable<Person> {
    return this.httpClient.delete<Person>(`${SERVICE_API_URL}/person`, {
        params: new HttpParams().append('id', id)
      }
    )
  }
}
