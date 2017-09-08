import { Component, OnInit } from '@angular/core';
import { ShopingCartService } from '../../services/shoping-cart.service'
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  product: any;
  item: any;
  cart: any = []
  cal: any;
  constructor(private shopingCartService: ShopingCartService,
    private router: Router) {
    this.item = {
      id: 0,
      name: "",
      prices: "",
      image: "",
      color: "",
      total: 0,
      out_of_stock: false
    }
   
   this.cal = this.shopingCartService.getCalculate();
  }

  ngOnInit() {
    this.shopingCartService.getProduct().subscribe(res => {
      res.reduce(function (product, val, index) {
        if (val.out_of_stock == true) {
          val.total = 0
        }
        return product
      }, 0)
      this.product = res;
    })
    //this.shopingCartService.getCalculate();
  }
  listCart(item) {
    this.router.navigate([`/cart`]);
  }
  addCart(product) {
    this.cal = this.shopingCartService.addCart(product);
}
}
