import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanchasFormsComponent } from './canchas-forms.component';

describe('CanchasFormsComponent', () => {
  let component: CanchasFormsComponent;
  let fixture: ComponentFixture<CanchasFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CanchasFormsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CanchasFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
