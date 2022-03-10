import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeidiComponent } from './heidi.component';

describe('HeidiComponent', () => {
  let component: HeidiComponent;
  let fixture: ComponentFixture<HeidiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeidiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeidiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
