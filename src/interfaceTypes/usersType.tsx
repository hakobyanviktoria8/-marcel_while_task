export interface UsersType {
  id: number;
  email: string;
  password: string;
  username: string;
  phone: string;
  address: {
    city: string;
    street: string;
    zipcode: string;
    number: number;
    geolocation: {
      lat: number;
      long: number;
    };
  };
  name: {
    firstname: string;
    lastname: string;
  };
}
