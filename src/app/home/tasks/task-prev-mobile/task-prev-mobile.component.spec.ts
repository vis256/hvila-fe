import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskPrevMobileComponent } from './task-prev-mobile.component';

describe('TaskPrevMobileComponent', () => {
  let component: TaskPrevMobileComponent;
  let fixture: ComponentFixture<TaskPrevMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskPrevMobileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskPrevMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
