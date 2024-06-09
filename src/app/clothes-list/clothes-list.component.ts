import { Component } from '@angular/core';
import { Clothes } from './clothes';
import { ClothesCartService } from '../clothes-cart.service';

@Component({
  selector: 'app-clothes-list',
  templateUrl: './clothes-list.component.html',
  styleUrl: './clothes-list.component.scss'
})
export class ClothesListComponent {

  clothes: Clothes[] = [
     {
         name: "Pants",
         description: "Cargo",
         type: "Pants",
         price: 23200,
         stock: 5,
         image: "assets/img/pantalon_cargo.jpg",
         ofer: false,
         quantity: 0,
     },
     {
         name: "T-shirt",
         description: "White cotton",
         type: "T-shirt",
         price: 12600,
         stock: 7,
         image: "assets/img/remera_blanca.jpg",
         ofer: true,
         quantity: 0,
     },
     {
         name: "Jacket",
         description: "Fleece",
         type: "Jacket",
         price: 30000,
         stock: 6,
         image: "assets/img/buzo_polar.jpg",
         ofer: false,
         quantity: 0,
     },
     {
        name: "Sweater",
        description: "Thin-neck wool",
        type: "Sweater",
        price: 38500,
        stock: 3,
        image: "assets/img/sueter_lana.jpg",
        ofer: false,
        quantity: 0,
     },
     {
        name: "Jacket",
        description: "Fleece with collar",
        type: "Jacket",
        price: 53000,
        stock: 4,
        image: "assets/img/campera_polar.jpg",
        ofer: false,
        quantity: 0,
      }
]

clothesCopy: Clothes[] = [...this.clothes];
  
constructor(private cart: ClothesCartService) { 
}

addToCart (clothes: any): void {
  this.cart.addToCart(clothes);
  clothes.stock -= clothes.quantity;
  clothes.quantity = 0;
}

filterByType(type: string): void {
  if (type === 'All') {
    this.clothesCopy = [...this.clothes];
  } else {
    this.clothes = this.clothesCopy.filter(clothes => clothes.type === type);
  }
}


}
