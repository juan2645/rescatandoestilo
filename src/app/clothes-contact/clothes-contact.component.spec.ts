import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClothesContactComponent } from './clothes-contact.component';

describe('ClothesContactComponent', () => {
  let component: ClothesContactComponent;
  let fixture: ComponentFixture<ClothesContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClothesContactComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClothesContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
