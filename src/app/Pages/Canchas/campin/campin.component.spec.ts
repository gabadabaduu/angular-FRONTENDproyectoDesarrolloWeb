import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampinComponent } from './campin.component';

describe('CampinComponent', () => {
  let component: CampinComponent;
  let fixture: ComponentFixture<CampinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CampinComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CampinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
