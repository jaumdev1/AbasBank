import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogAccountComponent } from './catalog-account.component';

describe('CatalogAccountComponent', () => {
  let component: CatalogAccountComponent;
  let fixture: ComponentFixture<CatalogAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CatalogAccountComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CatalogAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
