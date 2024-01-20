import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogBankComponent } from './catalog-bank.component';

describe('CatalogBankComponent', () => {
  let component: CatalogBankComponent;
  let fixture: ComponentFixture<CatalogBankComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CatalogBankComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CatalogBankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
