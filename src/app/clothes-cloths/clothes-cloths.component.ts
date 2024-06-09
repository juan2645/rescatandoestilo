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

  filterByType(type: string): void {
    this.clothesListComponent.filterByType(type);
  }

}
