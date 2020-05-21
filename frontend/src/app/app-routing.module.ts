import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageProfileComponent } from './pages/page-profile/page-profile.component';
import { PageContactComponent } from './pages/page-contact/page-contact.component';
import { PageResumeComponent } from './pages/page-resume/page-resume.component';
import { PageResumePreviewComponent } from './pages/page-resume-preview/page-resume-preview.component';
import { PageDetailsComponent } from './pages/page-details/page-details.component';
import { PageBlogComponent } from './pages/page-blog/page-blog.component';
import { PageBlogsComponent } from './pages/page-blogs/page-blogs.component';


const routes: Routes = [
  { path: "", redirectTo: 'profile', pathMatch: 'full' },
  { path: "profile", component: PageProfileComponent },
  { path: "contact", component: PageContactComponent },
  { path: "resume", component: PageResumeComponent },
  { path: "resume-preview", component: PageResumePreviewComponent },
  { path: 'details/:sectionId/:itemId', component: PageDetailsComponent },
  // { path: "blogs", component: PageBlogsComponent },
  // { path: "blog/:blogId", component: PageBlogComponent },
]

@NgModule({
  imports: [
    RouterModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }