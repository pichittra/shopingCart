import { Component, OnInit } from '@angular/core';
import { ShopingCartService } from '../../services/shoping-cart.service'

@Component({
  selector: 'app-show-cart',
  templateUrl: './show-cart.component.html',
  styleUrls: ['./show-cart.component.css']
})
export class ShowCartComponent implements OnInit {
  cart: any = []
  cal: any;
  constructor(private shopingCartService: ShopingCartService) { 
    this.cart = this.shopingCartService.getCart();
    this.cal = this.shopingCartService.getCalculate();
  }

  ngOnInit() {
 
  }

}
