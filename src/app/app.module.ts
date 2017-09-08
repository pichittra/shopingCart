import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ShopingCartService } from './services/shoping-cart.service';
import {HttpClientModule} from '@angular/common/http';
import { Http, HttpModule } from '@angular/http';
import { ShowCartComponent } from './components/show-cart/show-cart.component';
import { RouterLink } from '@angular/router';
const routes: Routes = [
  {
      path: '',
      component: HomeComponent
  },
  {
    path: 'cart',
    component: ShowCartComponent
},
 
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ShowCartComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    HttpModule
  ],
  exports: [RouterModule],
  providers: [ShopingCartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
