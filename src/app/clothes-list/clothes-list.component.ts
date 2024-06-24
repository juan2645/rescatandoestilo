import { Component, OnInit } from '@angular/core';
import { Clothes } from './clothes';
import { ClothesCartService } from '../clothes-cart.service';
import { ClothesDataService } from '../clothes-data.service';

@Component({
  selector: 'app-clothes-list',
  templateUrl: './clothes-list.component.html',
  styleUrls: ['./clothes-list.component.scss']
})
export class ClothesListComponent implements OnInit {

  clothes: Clothes[] = [];
  clothesCopy: Clothes[] = [];

  constructor(
    private cart: ClothesCartService,
    private clothesDataService: ClothesDataService
  ) { }


  /**
   * Inicializa el componente. 
   * Si sessionStorage está disponible, intenta cargar las prendas almacenadas.
   * Si no hay prendas almacenadas, las obtiene del servicio de datos.
   */
  ngOnInit(): void {
    if (this.isSessionStorageAvailable()) {
      const storedClothes = sessionStorage.getItem('clothes');
      if (storedClothes) {
        this.clothes = JSON.parse(storedClothes);
        this.clothesCopy = [...this.clothes];
      } else {
        this.fetchClothesData();
      }
    } else {
      this.fetchClothesData();
    }
  }


  /**
   * Obtiene todas las prendas de la fuente de datos y las almacena en sessionStorage.
   */
  fetchClothesData(): void {
    this.clothesDataService.getAll().subscribe(
      (clothes) => {
        this.clothes = clothes;
        this.clothesCopy = [...clothes];
        if (this.isSessionStorageAvailable()) {
          sessionStorage.setItem('clothes', JSON.stringify(this.clothes));
        }
      },
      (error) => console.error('Error fetching clothes data', error)
    );
  }


  /**
   * Agrega una prenda al carrito de compras y actualiza el stock disponible.
   * Almacena el estado actualizado en sessionStorage.
   * @param clothes La prenda que se va a agregar al carrito.
   */
  addToCart(clothes: Clothes): void {
    this.cart.addToCart(clothes);
    clothes.stock -= clothes.quantity;
    clothes.quantity = 0;
    if (this.isSessionStorageAvailable()) {
      sessionStorage.setItem('clothes', JSON.stringify(this.clothesCopy));
    }
  }


  /**
   * Filtra la lista de prendas por tipo.
   * @param type es el tipo de prenda por el cual filtrar ('All' para mostrar todas las prendas).
   */
  filterByType(type: string): void {
    if (type === 'All') {
      this.clothes = [...this.clothesCopy];
    } else {
      this.clothes = this.clothesCopy.filter(clothes => clothes.type === type);
    }
  }

  /**
   * Verifica si sessionStorage está disponible y es funcional en el entorno actual.
   * @returns {boolean} True si sessionStorage está disponible, de lo contrario False.
   */
  private isSessionStorageAvailable(): boolean {
    try {
      const testKey = 'test';
      sessionStorage.setItem(testKey, testKey);
      sessionStorage.removeItem(testKey);
      return true;
    } catch (e) {
      return false;
    }
  }
}
