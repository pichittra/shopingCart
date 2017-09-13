import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
//import { Observable } from 'rxjs/forkJoin';
import { Http, Response, Request } from '@angular/http';

@Injectable()
export class ShopingCartService {
  cart: any = []
  cal: any;
  favorite: any;
  product: any;
  join: any;
  constructor(private http: Http) {
    this.cal = { total: 0, prices: 0 };
   this.join = Observable.forkJoin(
     this.getProduct(),
     this.getFavorite()
    ) 
  }
  getProduct(): Observable<any> {
    return this.http.get
      (`http://www.mocky.io/v2/59b0d4e6260000d501287d57`)
      .map((res: Response) => res.json());
  }
  addFavorite(id): Observable<any> {
    return this.product = this.http.post
    (`http://localhost:3000/favorite`, { pId: id })
    .map((res: Response) => res.json());
  }
  getFavorite(): Observable<any> {
    return this.product = this.http.get
      (`http://localhost:3000/favorite`)
      .map((res: Response) => res.json());
  }
  addCart(product): Observable<any> {
    const index = this.cart.indexOf(product);
    if (index !== -1) {
      this.cart[index].quantity++;
    } else {
      product.quantity = 1;
      this.cart.push(product);
    }
    product.total--;
    this.cal = this.cart.reduce(function (cart, val, index, array) {
      cart.total += val.quantity;
      let price: number = Number(val.prices)
      cart.prices += price * val.quantity;
      return cart
    }, { total: 0, prices: 0 })
    return this.cal
  }

  getCart(): Observable<any> {
    return this.cart;
  }
  getCalculate() {
    return this.cal;
  }
}
