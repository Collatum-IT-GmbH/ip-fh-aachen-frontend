import {Injectable} from '@angular/core';
import {Person} from "../dto/models";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private httpClient: HttpClient
  ) {
  }

  createPerson(person: Person): Observable<Person> {
    return this.httpClient.post<Person>("http://localhost:8080/person", person
    )
  }
}
