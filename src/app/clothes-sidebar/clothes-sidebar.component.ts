import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-clothes-sidebar',
  templateUrl: './clothes-sidebar.component.html',
  styleUrls: ['./clothes-sidebar.component.scss']
})
export class ClothesSidebarComponent {
  @Output() filterByType = new EventEmitter<string>();

  types: string[] = ['T-shirt', 'Pants', 'Jacket', 'Dress', 'Shoes','Sweater','Accessory'];

  constructor() { }

  /**
   * Se activa al seleccionar un tipo de prenda en la barra lateral.
   * Emite un evento para notificar al componente padre sobre el tipo de prenda seleccionado.
   * @param type es el tipo de prenda seleccionado ('T-shirt', 'Pants', etc.).
   */
  selectType(type: string) {
    this.filterByType.emit(type);
  }
  
}