import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyReloadsComponent } from './buy-reloads.component';

describe('BuyReloadsComponent', () => {
  let component: BuyReloadsComponent;
  let fixture: ComponentFixture<BuyReloadsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuyReloadsComponent]
    });
    fixture = TestBed.createComponent(BuyReloadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
