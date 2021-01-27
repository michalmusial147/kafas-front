export class User {
  id: number;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  address1: string;
  address2: string;
  postcode: string;
  telephone: string;
  newsLetterSubscriber: boolean;
  token?: string;
  authorities: any;
  roles: any;
}
