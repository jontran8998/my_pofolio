import { Component, OnInit, Input } from '@angular/core';
import { DataService } from 'src/app/services/data/data.service';
import { RouteService } from 'src/app/services/route/route.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-page-blog',
  templateUrl: './page-blog.component.html',
  styleUrls: ['./page-blog.component.scss']
})
export class PageBlogComponent implements OnInit {
  currentPage: string
  blogs: any

  constructor(
    private dataService: DataService,
    private routeService: RouteService,
    private route: ActivatedRoute,
  ) {
    this.currentPage = this.routeService.Pages.Blogs
  }

  ngOnInit(): void {
    this.blogs = this.dataService.getBlogs().filter(blog => `${blog.id}` === this.route.snapshot.url[1].path)
  }
}
