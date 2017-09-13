import { Injectable } from '@angular/core';

@Injectable()
export class TestService {
  arr: any = []
  nums: any;
  constructor() {
    this.arr = [3, 2, 'l', 5, 'g', 'c', 5] //20
    this.test(this.arr);
  }
  test(arr) {
    let sum = 0;
    let text = '';
    for (let i = 0; i < arr.length; i++) {
      if(typeof arr[i] === 'number'){
       sum += arr[i];
      }else{
        text = text+arr[i];
      }
    }
    return sum+text;
  }

}
