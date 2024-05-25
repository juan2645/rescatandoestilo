import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClothesClothsComponent } from './clothes-cloths.component';

describe('ClothesClothsComponent', () => {
  let component: ClothesClothsComponent;
  let fixture: ComponentFixture<ClothesClothsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClothesClothsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClothesClothsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
