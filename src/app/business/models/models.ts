export class Address {
  zip: string;
  city: string;
  street: string;
  houseNumber: string;

  constructor(
    _zip: string = "",
    _city: string = "",
    _street: string = "",
    _houseNumber: string = ""
  ) {
    this.zip = _zip;
    this.city = _city;
    this.street = _street;
    this.houseNumber = _houseNumber;
  }
}

export class Person {
  dateOfBirth: string;
  familyName: string;
  givenName: string;
  email: string;
  address: Address;

  constructor(
    _dateOfBirth: string = "",
    _familyName: string = "",
    _givenName: string = "",
    _email: string = "",
    _address: Address = new Address()
  ) {
    this.dateOfBirth = _dateOfBirth;
    this.familyName = _familyName;
    this.givenName = _givenName;
    this.email = _email;
    this.address = _address;
  }
}
