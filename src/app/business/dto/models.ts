export class Person {
  dateOfBirth: string;
  lastName: string;
  firstName: string;
  email: string;
  address: Address;

  constructor(
    dateOfBirth: string = "",
  lastName: string = "",
  firstName: string = "",
  email: string = "",
  address: Address = new Address()
  ) {
    this.dateOfBirth = dateOfBirth;
    this.lastName = lastName;
    this.firstName = firstName;
    this.email = email;
    this.address = address;
  }
}

export class Address {
  zip: string;
  houseNumber: string;
  city: string;
  street: string;

  constructor(
    zip: string = "",
  houseNumber: string= "",
  city: string= "",
  street: string= ""
  ) {
    this.zip = zip;
    this.houseNumber = houseNumber;
    this.city = city;
    this.street = street;
  }
}
