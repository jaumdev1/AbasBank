import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterBankComponent } from './RegisterBankComponent';

describe('RegisterBankComponent', () => {
  let component: RegisterBankComponent;
  let fixture: ComponentFixture<RegisterBankComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterBankComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterBankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
