import { Injectable } from '@angular/core';

@Injectable()
export class TestService {
  arr: any = []

  constructor() {
    this.arr = [3, 2, 'l', 5, 'g', 'c', 5] //20
    this.test(this.arr);
    //  console.log(this.test(this.arr))

  }
  test(arr) {
    let sum = 0;
    let text = [];
    // let totalNum = [];
    // let totalString = [];
    // let total = [];
    // let toString = [];
    // for (let i = 0; i < arr.length; i++) {
    //   if(typeof arr[i] === 'number'){
    //    sum += arr[i];
    //   }else{
    //     text = text+arr[i];
    //   }
    // }
    //  return sum+text;
    // console.log(arr)
    return arr.reduce(function (num, array, index) {

      if (typeof array === 'number') {
        //totalNum.push(array);
        //console.log(sum)
        num += array;
        console.log(num)
      } else {
        text.push(array);
        text.toString();
         console.log(text)
        // totalString.push(array);
        //text = text+arr;
        // console.log(array)
      }

      return  num+text;
      //   console.log(index)
    })
  }

}
