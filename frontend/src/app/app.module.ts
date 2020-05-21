import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { RecaptchaModule, RecaptchaFormsModule } from 'ng-recaptcha';
import { MarkdownModule } from 'ngx-markdown';

import { NavComponent } from './components/nav/nav.component';
import { NavSocialMediaComponent } from './components/nav-social-media/nav-social-media.component';
import { PageProfileComponent } from './pages/page-profile/page-profile.component';
import { PageContactComponent } from './pages/page-contact/page-contact.component';
import { AppComponent } from './app.component';
import { SectionItemComponent } from './components/section-item/section-item.component';
import { ContactInfoComponent } from './components/contact-info/contact-info.component';
import { EmailFormComponent } from './components/email-form/email-form.component';
import { PageResumeComponent } from './pages/page-resume/page-resume.component';
import { PageBlogComponent } from './pages/page-blog/page-blog.component';
import { PageResumePreviewComponent } from './pages/page-resume-preview/page-resume-preview.component';
import { PageDetailsComponent } from './pages/page-details/page-details.component';
import { PageBlogsComponent } from './pages/page-blogs/page-blogs.component';
import { MarkdownComponent } from './components/markdown/markdown.component';


@NgModule({
  declarations: [
    AppComponent,
    PageContactComponent,
    NavComponent,
    NavSocialMediaComponent,
    PageProfileComponent,
    SectionItemComponent,
    ContactInfoComponent,
    EmailFormComponent,
    PageResumeComponent,
    PageBlogComponent,
    PageResumePreviewComponent,
    PageDetailsComponent,
    PageBlogsComponent,
    MarkdownComponent,
  ],
  imports: [
    HttpClientModule,
    PdfViewerModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,

    RecaptchaModule,
    RecaptchaFormsModule, 
    MarkdownModule.forRoot({ loader: HttpClient }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
