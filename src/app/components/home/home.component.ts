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
  //countId = 0;
  countItem = 0;
  constructor(private shopingCartService: ShopingCartService) {
    this.item = {
      id: 0,
      name: "",
      prices: "",
      image: "",
      color: "",
      total: 0,
      out_of_stock: false
    }
    console.log(this.item)
  }

  ngOnInit() {
    this.shopingCartService.getProduct().subscribe(res => {
      this.product = res;
      //  console.log(this.product)
    })
  }
  addCart(product) {

    if (this.cart.length != 0) {
      for (let i = 0; i < this.cart.length; i++) {
        //console.log(product)
        if (this.cart[i].id != product.id) {
          this.item = product
          this.cart.push(this.item)
        } else {
          console.log("no")
        }
      }

    } else {
      this.item = product
      this.cart.push(this.item)
    }
    console.log(this.cart)
  }


}
