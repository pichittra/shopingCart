import { Component, OnInit } from '@angular/core';
import { ShopingCartService } from '../../services/shoping-cart.service'
@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
  favorite: any[] = [];

  constructor(private shopingCartService: ShopingCartService) { }

  ngOnInit() {
    this.shopingCartService.join.subscribe(res => {
      for (let i = 0; i < res[0].length; i++) {
        for (let j = 0; j < res[1].length; j++) {
          if (res[1][j].pId === res[0][i].id) {
            this.favorite[j] = { name: "", id: 0, price: 0 };
            this.favorite[j].id = res[0][i].id;
            this.favorite[j].name = res[0][i].name;
            this.favorite[j].price = res[0][i].prices;
          }
        }
      }
    })
  }

}
