import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectLandingComponent } from './subject-landing.component';

describe('SubjectLandingComponent', () => {
  let component: SubjectLandingComponent;
  let fixture: ComponentFixture<SubjectLandingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubjectLandingComponent]
    });
    fixture = TestBed.createComponent(SubjectLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
