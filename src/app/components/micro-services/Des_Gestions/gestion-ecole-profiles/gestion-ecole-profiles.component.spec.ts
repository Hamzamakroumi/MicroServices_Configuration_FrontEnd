import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionEcoleProfilesComponent } from './gestion-ecole-profiles.component';

describe('GestionEcoleProfilesComponent', () => {
  let component: GestionEcoleProfilesComponent;
  let fixture: ComponentFixture<GestionEcoleProfilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionEcoleProfilesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionEcoleProfilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
