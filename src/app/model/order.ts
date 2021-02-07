import {CartItem} from './cart-item';
import {User} from './user';


export class Order {
  cartItemsList: CartItem[];
  user: User;
}
