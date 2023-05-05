import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevervarComponent } from './revervar.component';

describe('RevervarComponent', () => {
  let component: RevervarComponent;
  let fixture: ComponentFixture<RevervarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RevervarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RevervarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
