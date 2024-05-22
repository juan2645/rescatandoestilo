import { Component } from '@angular/core';
import { Clothes } from './clothes';

@Component({
  selector: 'app-clothes-list',
  templateUrl: './clothes-list.component.html',
  styleUrl: './clothes-list.component.scss'
})
export class ClothesListComponent {

  clothes: Clothes[] = [
     {
         nombre: "Pantalon",
         tipo: "Cargo",
         precio: 23200,
         stock: 5,
         imagen: "assets/img/pantalon_cargo.jpg"
     },
     {
         nombre: "Remera blanca",
         tipo: "Algodon",
         precio: 12600,
         stock: 7,
         imagen: "assets/img/remera_blanca.jpg"
     },
     {
         nombre: "Buzo",
         tipo: "Polar",
         precio: 30000,
         stock: 6,
         imagen: "assets/img/buzo_polar.jpg"
     }
]

}
