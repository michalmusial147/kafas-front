export class Offer {
  id: number;
  title: string;
  type: string;
  rooms: number;
  address: {
    street: string;
    city: string;
    region: string;
    postalCode: string;
    country: string;
  }
  description: string;
  datePosted: Date;
  photo: string;

  constructor() {
    this.address = {street: "",
      city: "",
      region: "",
      postalCode: "",
      country: ""};
  }

}
