import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VardatoComponent } from './vardato.component';

describe('VardatoComponent', () => {
  let component: VardatoComponent;
  let fixture: ComponentFixture<VardatoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VardatoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VardatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
