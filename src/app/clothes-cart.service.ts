import { Injectable } from '@angular/core';
import { Clothes } from './clothes-list/clothes';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClothesCartService {

  constructor() { }

  private _cartList: Clothes[] = [];
  private _total: number = 0;

  carList: BehaviorSubject<Clothes[]> = new BehaviorSubject(this._cartList);
  cartTotal: BehaviorSubject<number> = new BehaviorSubject(this._total);

  addToCart(clothes: Clothes) {
    if (clothes.quantity <= 0) {
      return;
    }
    let item: Clothes | undefined = this._cartList.find((valor1) => valor1.name == clothes.name);
    if (item) {
      item.quantity += clothes.quantity;
    } else {
      this._cartList.push({... clothes});
    }
    this.updateTotal();
    this.carList.next(this._cartList);
  }

  private updateTotal() {
    this._total = this._cartList.reduce((acc, item) => acc + (item.quantity * item.price), 0);
    this.cartTotal.next(this._total);
  }
}