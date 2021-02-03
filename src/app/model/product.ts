// Product Tag
export type ProductTags = 'nike' | 'puma' | 'lifestyle' | 'caprese';

export class Product {
  id?: number;
  title?: string;
  price?: number;
  type?: string;
  salePrice?: number;
  discount?: number;
  offerImages?: any;
  state?: string;
  shortDetails?: string;
  description?: string;
  dateAdded?: string
  stock?: number;
  newPro?: boolean;
  brand?: string;
  sale?: boolean;
  category?: string;
  tags?: ProductTags[];
  quantity?: number;
  constructor(
    id?: number,
    name?: string,
    price?: number,
    salePrice?: number,
    discount?: number,
    offerImages?: any,
    type?: string,
    shortDetails?: string,
    description?: string,
    stock?: number,
    dateAdded?: string,
    state?: string,
    newPro?: boolean,
    brand?: string,
    sale?: boolean,
    category?: string,
    quantity?: number,
    tags?: ProductTags[],
  ) {
    this.id = id;
    this.title = name;
    this.price = price;
    this.type = type;
    this.salePrice = salePrice;
    this.discount = discount;
    this.offerImages = offerImages;
    this.shortDetails = shortDetails;
    this.description = description;
    this.stock = stock;
    this.newPro = newPro;
    this.brand = brand;
    this.sale = sale;
    this.category = category;
    this.tags = tags;
    this.state = state;
    this.quantity =  quantity;
    this.dateAdded = dateAdded;
  }
}
