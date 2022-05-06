import { Component, OnInit } from '@angular/core';
import { cart } from '../models/cart';

@Component({
  selector: 'app-shoppinglist',
  templateUrl: './shoppinglist.component.html',
  styleUrls: ['./shoppinglist.component.css']
})
export class ShoppinglistComponent implements OnInit {

  shoppingcart:cart[] = [];

  inputproduct:string = '';

  inputprice:number = 0;

  total:number = 0;
  constructor() { }

  ngOnInit(): void {
    this.shoppingcart = [
      {
        product: 'Apple',
        quantity: 3,
        price: 10
      },
      {
        product: 'Kiwi',
        quantity: 1,
        price: 20
      }
    ]
  }


  productplus (id:number) {
  this.shoppingcart.map((sc, i) => {
    if(i == id) sc.quantity = sc.quantity + 1;
    return sc
  })
}


productminus (id:number) {
  this.shoppingcart.map((sc, i) => {
    if (sc.quantity === 1 && i === id) this.shoppingcart = this.shoppingcart.filter((sc, i) => i !== id);
    else if(i == id) sc.quantity = sc.quantity - 1;
      return sc
  })
}


removefromcart (id:number) {
  this.shoppingcart = this.shoppingcart.filter((sc, i) => i !== id);
}

addtocart () {
  if(this.inputproduct == '' || this.inputprice==0) alert("Fields cannot be empty!")
  else
  this.shoppingcart.push({
    product: this.inputproduct,
    quantity: 1,
    price: this.inputprice
  });
  this.inputproduct='';
  this.inputprice=0;
}

getTotal() {
  let total = 0;
  for (var i = 0; i < this.shoppingcart.length; i++) {
      if (this.shoppingcart[i].quantity) {
          total += (this.shoppingcart[i].price * this.shoppingcart[i].quantity);
      }
  }
  return total;
}

}