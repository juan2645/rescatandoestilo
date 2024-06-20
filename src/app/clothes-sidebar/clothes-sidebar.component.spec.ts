import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClothesSidebarComponent } from './clothes-sidebar.component';

describe('ClothesSidebarComponent', () => {
  let component: ClothesSidebarComponent;
  let fixture: ComponentFixture<ClothesSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClothesSidebarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClothesSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
