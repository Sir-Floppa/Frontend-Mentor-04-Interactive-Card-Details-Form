import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessScreenComponent } from './success-screen.component';

describe('SuccessScreenComponent', () => {
  let component: SuccessScreenComponent;
  let fixture: ComponentFixture<SuccessScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuccessScreenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuccessScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
