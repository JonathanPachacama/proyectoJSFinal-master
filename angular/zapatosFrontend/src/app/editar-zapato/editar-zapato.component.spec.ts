import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarZapatoComponent } from './editar-zapato.component';

describe('EditarZapatoComponent', () => {
  let component: EditarZapatoComponent;
  let fixture: ComponentFixture<EditarZapatoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarZapatoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarZapatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
