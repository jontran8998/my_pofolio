import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavSocialMediaComponent } from './nav-social-media.component';

describe('SocialMediaComponent', () => {
  let component: NavSocialMediaComponent;
  let fixture: ComponentFixture<NavSocialMediaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavSocialMediaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavSocialMediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
