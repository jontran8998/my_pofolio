import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageResumeComponent } from './page-resume.component';

describe('PageResumeComponent', () => {
  let component: PageResumeComponent;
  let fixture: ComponentFixture<PageResumeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageResumeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
