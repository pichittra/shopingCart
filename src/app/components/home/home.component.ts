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
    this.cal = this.shopingCartService.getCalculate();
     //   res.reduce(function (product, val, index) {
    //     if (val.out_of_stock == true) {
    //       val.total = 0
    //     }
    //     return product
    //   }, 0)
    //   this.product = res;
    // })
  }

  ngOnInit() {
    this.shopingCartService.join.subscribe(res => {
      // for (let i = 0; i < res[0].length; i++) {
      //   for (let j = 0; j < res[1].length; j++) {
      //     if (res[1][j].pId == res[0][i].id) {
      //       if (this.product[i].favorite != true) {
      //         this.product[i].favorite = true;
      //       //  this.product = res
      //       }
      //     }
      //   }
      // }
        this.product =  res[0].map(function (currentValue) {

          if(currentValue.out_of_stock == true){
            currentValue.total = 0;
          }
          //findId คือ ให้ return ตัวที่ id ตรงกัน
          const findId = res[1].find(function (item) {
            return item.pId == currentValue.id;
          })
            if (findId) { // เช็คว่ามีค่าไหม
              currentValue.favorite = true;
            }else{
              currentValue.favorite = false;
            }
            return currentValue
        })
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
      item.favorite = true;
    });
  }
}
