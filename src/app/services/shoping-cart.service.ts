import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response, Request } from '@angular/http';

@Injectable()
export class ShopingCartService {
  constructor(private http: Http) { }

  getProduct(): Observable<any> {
    return this.http.get
    (`http://www.mocky.io/v2/59b0d4e6260000d501287d57`)
    .map((res: Response) => res.json());
  }

 // updateCart(product): Observable<any> {
    // return this.http.post
    // (`http://www.mocky.io/v2/59b0d4e6260000d501287d57` , {item : product})
    // .map((res: Response) => res.json());
  //}
}
