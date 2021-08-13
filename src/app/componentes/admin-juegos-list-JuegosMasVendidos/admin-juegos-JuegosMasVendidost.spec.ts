import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminJuegosListComponent } from './admin-juegos-list.component';

describe('AdminJuegosListComponent', () => {
  let component: AdminJuegosListComponent;
  let fixture: ComponentFixture<AdminJuegosListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminJuegosListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminJuegosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
