import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageResumePreviewComponent } from './page-resume-preview.component';

describe('PageResumePreviewComponent', () => {
  let component: PageResumePreviewComponent;
  let fixture: ComponentFixture<PageResumePreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageResumePreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageResumePreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
