import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallereparacionComponent } from './detallereparacion.component';

describe('DetallereparacionComponent', () => {
  let component: DetallereparacionComponent;
  let fixture: ComponentFixture<DetallereparacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetallereparacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallereparacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
