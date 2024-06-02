import { Injectable } from '@angular/core';
import { Clothes } from './clothes-list/clothes';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClothesCartService {

  constructor() { }

  private _cartList: Clothes[] = [];
  carList : BehaviorSubject<Clothes[]> = new BehaviorSubject(this._cartList);
  
  addToCart(clothes: Clothes) {
    let item : Clothes | undefined = this._cartList.find((valor1) => valor1.nombre == clothes.nombre);
    if (item) {
      item.cantidad += clothes.cantidad;
    } else {
      this._cartList.push({... clothes});
    }
    this.carList.next(this._cartList);
  }

}
