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
  cartTotal$: Observable<number>;
  purchaseComplete: boolean;
  isCartEmpty: boolean;
  showBuyButton: boolean;
  allowAddToCart: boolean;

  constructor(private cart : ClothesCartService) {
    this.cartList$ = cart.carList.asObservable();
    this.cartTotal$ = cart.cartTotal.asObservable();
    this.purchaseComplete = false;
    this.isCartEmpty = true;
    this.showBuyButton = false;
    this.allowAddToCart = true;
  }

  /**  
   * El método ngOnInit se llama una vez que el componente ha sido inicializado.
   * Se suscribe al observable cartList$ para actualizar isCartEmpty dependiendo de si el carrito está vacío o no.
   */
  ngOnInit(): void {
    this.cartList$.subscribe(cartList => {
      this.isCartEmpty = cartList.length === 0;
    });
  }

  /** 
   * El método buyItems se llama cuando el usuario hace clic en el botón "Buy".
   * Marca la compra como completa y oculta el botón de compra.
   */
  buyItems() {
    this.purchaseComplete = true;
    this.showBuyButton = false;
  }

}
