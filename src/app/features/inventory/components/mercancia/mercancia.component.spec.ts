import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MercanciaComponent } from './mercancia.component';

describe('InventoryComponent', () => {
  let component: MercanciaComponent;
  let fixture: ComponentFixture<MercanciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MercanciaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MercanciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
