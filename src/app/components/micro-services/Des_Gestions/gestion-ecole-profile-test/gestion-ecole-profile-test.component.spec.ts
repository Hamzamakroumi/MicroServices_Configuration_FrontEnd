import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionEcoleProfileTestComponent } from './gestion-ecole-profile-test.component';

describe('GestionEcoleProfileTestComponent', () => {
  let component: GestionEcoleProfileTestComponent;
  let fixture: ComponentFixture<GestionEcoleProfileTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionEcoleProfileTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionEcoleProfileTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
