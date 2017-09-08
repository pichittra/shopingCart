import { Component, OnInit } from '@angular/core';
import { ShopingCartService } from '../../services/shoping-cart.service'
@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
  favorite: any;
  constructor(private shopingCartService: ShopingCartService) { }

  ngOnInit() {
    this.shopingCartService.getFavorite().subscribe(res => {
      this.favorite = res
      console.log(this.favorite)
    });
  }

}
