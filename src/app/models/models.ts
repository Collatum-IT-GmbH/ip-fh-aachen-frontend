import {Injectable} from "@angular/core";

@Injectable({
  providedIn: "root",
})

export class Address {
  zip: string;
  city: string;
  street: string;
  houseNumber: string;

  constructor() {
    this.zip = "";
    this.city = "";
    this.street = "";
    this.houseNumber = "";
  }
}

export class Person {
  dateOfBirth: string;
  familyName: string;
  givenName: string;
  email: string;
  address: Address;

  constructor() {
    this.dateOfBirth = "";
    this.familyName = "";
    this.givenName = "";
    this.email = "";
    this.address = new Address();
  }
}
