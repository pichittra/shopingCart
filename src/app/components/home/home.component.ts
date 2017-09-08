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
    this.cal = { total: 0, prices: 0 }
  }

  ngOnInit() {
    this.shopingCartService.getProduct().subscribe(res => {
      res.reduce(function(product,val,index){
        if(val.out_of_stock == true){
          val.total = 0
        }
        return product
      },0)
      this.product = res;
    })
  }
  addCart(product) {

    const index = this.cart.indexOf(product);
    if (index !== -1) {
      this.cart[index].quantity++;
    } else {
      product.quantity = 1;
      this.cart.push(product);
    }
    this.product[product.id - 1].total--;

    this.cal = this.cart.reduce(function (cart, val, index, array) {
      cart.total += val.quantity;
      let price: number = Number(val.prices)
      cart.prices += price* val.quantity;
      (cart.prices).toFixed(2); //กำหนดทศนิยม 2 ตำแหน่ง
      console.log(cart.prices)
      return cart
    }, { total: 0, prices: 0 })
  }
}
