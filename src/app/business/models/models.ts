export class Address {
  zip: string;
  city: string;
  street: string;
  houseNumber: string;

  constructor(
    zip: string = "",
    city: string = "",
    street: string = "",
    houseNumber: string = ""
  ) {
    this.zip = zip;
    this.city = city;
    this.street = street;
    this.houseNumber = houseNumber;
  }
}

export class Person {
  dateOfBirth: string;
  lastName: string;
  firstName: string;
  email: string;
  address: Address;

  constructor(
    dateOfBirth: string = "",
    firstName: string = "",
    lastName: string = "",
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
