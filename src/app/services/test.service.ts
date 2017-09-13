import { Injectable } from '@angular/core';

@Injectable()
export class TestService {
  arr: any = []
  total: any;
  constructor() {
    this.arr = [3, 2, 'l', 5, 'g', 'c', 5] //15
    this.test(this.arr);
  }
  test(arr) {
    //let text = [];
     //this.sum = this.total.number + this.total.string;
    // for (let i = 0; i < arr.length; i++) {
    //   if(typeof arr[i] === 'number'){
    //    sum += arr[i];
    //   }else{
    //     text = text+arr[i];
    //   }
    // }
    //  return sum+text;
     this.total = arr.reduce(function (num, array, index) {

      if (typeof array === 'number') {
        num.number += array;
      } else {
        num.string = num.string + array;
      }
      return num;
    },{number:0,string:''})
    return this.total.number + this.total.string;
  }

}
