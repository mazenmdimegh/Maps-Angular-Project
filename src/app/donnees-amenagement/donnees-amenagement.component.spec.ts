import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonneesAmenagementComponent } from './donnees-amenagement.component';

describe('DonneesAmenagementComponent', () => {
  let component: DonneesAmenagementComponent;
  let fixture: ComponentFixture<DonneesAmenagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonneesAmenagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DonneesAmenagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
