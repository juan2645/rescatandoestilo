import { Component } from '@angular/core';
import { ClothesCartService } from '../clothes-cart.service';
import { Clothes } from '../clothes-list/clothes';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-clothes-cart',
  templateUrl: './clothes-cart.component.html',
  styleUrl: './clothes-cart.component.scss'
})
export class ClothesCartComponent {

  cartList$: Observable<Clothes[]>;
  constructor(private cart : ClothesCartService) {
    this.cartList$ = cart.carList.asObservable();
  }

}
