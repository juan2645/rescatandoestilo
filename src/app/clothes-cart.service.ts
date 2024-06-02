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
    if (clothes.cantidad <= 0) {
      return;
    }
    let item: Clothes | undefined = this._cartList.find((valor1) => valor1.nombre == clothes.nombre);
    if (item) {
      item.cantidad += clothes.cantidad;
    } else {
      this._cartList.push({... clothes});
    }
    this.updateTotal();
    this.carList.next(this._cartList);
  }

  private updateTotal() {
    this._total = this._cartList.reduce((acc, item) => acc + (item.cantidad * item.precio), 0);
    this.cartTotal.next(this._total);
  }
}