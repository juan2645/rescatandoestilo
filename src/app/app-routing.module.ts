import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClothesClothsComponent } from './clothes-cloths/clothes-cloths.component';
import { ClothesContactComponent } from './clothes-contact/clothes-contact.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'cloths',
    pathMatch: 'full'
  },
  {
    path: 'cloths',
    component: ClothesClothsComponent
  },
  {
    path: 'contacto',
    component: ClothesContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
