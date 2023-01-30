export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

export interface ObjGridValue {
  [key: number]: number;
}

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  maidenName: string;
  age: number;
  gender: string;
  email: string;
  phone: string;
  username: string;
  password: string;
  birthDate: string;

  bloodGroup: string;
  height: number;
  weight: number;
  eyeColor: string;

  domain: string;
  ip: string;

  macAddress: string;
  university: string;

  ein: string;
  ssn: string;
  userAgent: string;
}

export interface Address {
  address: string;
  city: string;
  coordinates: Coordinates;
  postalCode: string;
  state: string;
}

export interface Coordinates {
  lat: number;
  lng: number;
}

export interface Bank {
  cardExpire: string;
  cardNumber: string;
  cardType: string;
  currency: string;
  iban: string;
}

export interface Company {
  address: Address;
  department: string;
  name: string;
  title: string;
}

export interface Hair {
  color: string;
  type: string;
}

export interface RowEventHandlersProps {
  rowData: User;
}

export interface NodeInfo {
  id: string;
  name: string;
  description: string;
}
