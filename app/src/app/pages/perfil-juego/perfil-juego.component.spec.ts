import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilJuegoComponent } from './perfil-juego.component';

describe('PerfilJuegoComponent', () => {
  let component: PerfilJuegoComponent;
  let fixture: ComponentFixture<PerfilJuegoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfilJuegoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilJuegoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
