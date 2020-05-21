import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageBlogsComponent } from './page-blogs.component';

describe('PageBlogsComponent', () => {
  let component: PageBlogsComponent;
  let fixture: ComponentFixture<PageBlogsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageBlogsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageBlogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
