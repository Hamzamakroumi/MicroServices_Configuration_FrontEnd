import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionEcoleProfileProductionComponent } from './gestion-ecole-profile-production.component';

describe('GestionEcoleProfileProductionComponent', () => {
  let component: GestionEcoleProfileProductionComponent;
  let fixture: ComponentFixture<GestionEcoleProfileProductionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionEcoleProfileProductionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionEcoleProfileProductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
