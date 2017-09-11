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
  favorite: any;
  star: any;
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
    //  this.product.filter(item => item.id == this.favorite.id)
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
      this.product.favorite = false;
      console.log(this.product)
      //  console.log(this.product)
    })

    this.shopingCartService.join.subscribe(res => {
      for (let i = 0; i < res[0].length; i++) {
        for (let j = 0; j < res[1].length; j++) {
          if (res[1][j].pId == res[0][i].id) {
            if (this.product[i].favorite != true) {
              this.product[i].favorite = true;
            }
          }
        }
      }
    })
  }
  listCart(item) {
    this.router.navigate([`/cart`]);
  }
  addCart(product) {
    this.cal = this.shopingCartService.addCart(product);
  }
  addFavorite(item) {
    this.shopingCartService.addFavorite(item.id).subscribe(res => {
      this.favorite = res
    });
  }
}
