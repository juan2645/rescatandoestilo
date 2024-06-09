import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClothesListComponent } from './clothes-list/clothes-list.component';
import { FormsModule } from '@angular/forms';
import { ClothesContactComponent } from './clothes-contact/clothes-contact.component';
import { ClothesClothsComponent } from './clothes-cloths/clothes-cloths.component';
import { ClothesCartComponent } from './clothes-cart/clothes-cart.component';
import { InputIntegerComponent } from './input-integer/input-integer.component';
import { ClothesSidebarComponent } from './clothes-sidebar/clothes-sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    ClothesListComponent,
    ClothesContactComponent,
    ClothesClothsComponent,
    ClothesCartComponent,
    InputIntegerComponent,
    ClothesSidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
