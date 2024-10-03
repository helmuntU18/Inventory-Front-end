import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MercanciaDialogComponent } from './mercancia-dialog.component';

describe('MercanciaDialogComponent', () => {
  let component: MercanciaDialogComponent;
  let fixture: ComponentFixture<MercanciaDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MercanciaDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MercanciaDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
