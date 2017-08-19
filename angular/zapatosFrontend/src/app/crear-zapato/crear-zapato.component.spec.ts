import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearZapatoComponent } from './crear-zapato.component';

describe('CrearZapatoComponent', () => {
  let component: CrearZapatoComponent;
  let fixture: ComponentFixture<CrearZapatoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearZapatoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearZapatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
