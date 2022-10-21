import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionEcoleProfileDevComponent } from './gestion-ecole-profile-dev.component';

describe('GestionEcoleProfileDevComponent', () => {
  let component: GestionEcoleProfileDevComponent;
  let fixture: ComponentFixture<GestionEcoleProfileDevComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionEcoleProfileDevComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionEcoleProfileDevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
