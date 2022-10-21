import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateFichierComponent } from './update-fichier.component';

describe('UpdateFichierComponent', () => {
  let component: UpdateFichierComponent;
  let fixture: ComponentFixture<UpdateFichierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateFichierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateFichierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
