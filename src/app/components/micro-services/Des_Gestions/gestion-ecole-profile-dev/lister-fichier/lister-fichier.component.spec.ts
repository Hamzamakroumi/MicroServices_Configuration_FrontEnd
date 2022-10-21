import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListerFichierComponent } from './lister-fichier.component';

describe('ListerFichierComponent', () => {
  let component: ListerFichierComponent;
  let fixture: ComponentFixture<ListerFichierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListerFichierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListerFichierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
