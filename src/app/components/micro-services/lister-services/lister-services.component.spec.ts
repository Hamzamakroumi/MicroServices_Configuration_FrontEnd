import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListerServicesComponent } from './lister-services.component';

describe('ListerServicesComponent', () => {
  let component: ListerServicesComponent;
  let fixture: ComponentFixture<ListerServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListerServicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListerServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
