import { Component, ViewChild } from '@angular/core';
import { ClothesListComponent } from '../clothes-list/clothes-list.component';

@Component({
  selector: 'app-clothes-cloths',
  templateUrl: './clothes-cloths.component.html',
  styleUrl: './clothes-cloths.component.scss'
})
export class ClothesClothsComponent {
  @ViewChild(ClothesListComponent)
  clothesListComponent!: ClothesListComponent;

  /**
   * Filtra la lista de ropa por tipo.
   * Se llama cuando se dispara un evento de filtro desde la barra lateral.
   * Delega la operación de filtrado al ClothesListComponent.
   * @param type ES el tipo de ropa por el cual filtrar.
   */
  filterByType(type: string): void {
    this.clothesListComponent.filterByType(type);
  }

}
