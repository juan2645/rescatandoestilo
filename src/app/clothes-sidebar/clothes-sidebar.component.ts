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

  selectType(type: string) {
    this.filterByType.emit(type);
  }
}