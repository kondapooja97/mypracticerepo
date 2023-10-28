import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogLandingComponent } from './blog-landing.component';

describe('BlogLandingComponent', () => {
  let component: BlogLandingComponent;
  let fixture: ComponentFixture<BlogLandingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlogLandingComponent]
    });
    fixture = TestBed.createComponent(BlogLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
