import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminJuegosComponent } from './admin-juegos.component';

describe('AdminJuegosComponent', () => {
  let component: AdminJuegosComponent;
  let fixture: ComponentFixture<AdminJuegosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminJuegosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminJuegosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
