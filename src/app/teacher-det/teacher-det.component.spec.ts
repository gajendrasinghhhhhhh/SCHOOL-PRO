import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherDetComponent } from './teacher-det.component';

describe('TeacherDetComponent', () => {
  let component: TeacherDetComponent;
  let fixture: ComponentFixture<TeacherDetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TeacherDetComponent]
    });
    fixture = TestBed.createComponent(TeacherDetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
