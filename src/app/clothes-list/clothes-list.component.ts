import { Component } from '@angular/core';
import { Clothes } from './clothes';
import { ClothesCartService } from '../clothes-cart.service';
import { ClothesContactComponent } from '../clothes-contact/clothes-contact.component';
import { ClothesDataService } from '../clothes-data.service';

@Component({
  selector: 'app-clothes-list',
  templateUrl: './clothes-list.component.html',
  styleUrl: './clothes-list.component.scss'
})
export class ClothesListComponent {

  clothes: Clothes[] = [];
  clothesCopy: Clothes[] = [...this.clothes];
  
  constructor(
    private cart: ClothesCartService,
    private clothesDataService: ClothesDataService) { 
  }

  ngOnInit(): void {
    this.clothesDataService.getAll().subscribe(
      (clothes) => {
        this.clothes = clothes;
        this.clothesCopy = [...clothes];  
      },
      (error) => console.error('Error fetching clothes data', error)
      );
  }

  addToCart (clothes: any): void {
   this.cart.addToCart(clothes);
   clothes.stock -= clothes.quantity;
   clothes.quantity = 0;
  }

  filterByType(type: string): void {
    if (type === 'All') {
      this.clothes = [...this.clothesCopy];
    } else {
      this.clothes = this.clothesCopy.filter(clothes => clothes.type === type);
    }
  }

}
