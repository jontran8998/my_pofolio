import { Component, OnInit, Input } from '@angular/core';
import { DataService } from 'src/app/services/data/data.service';
import { RouteService } from 'src/app/services/route/route.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page-details',
  templateUrl: './page-details.component.html',
  styleUrls: ['./page-details.component.scss']
})
export class PageDetailsComponent implements OnInit {
  currentPage: string
  sectionItem: any

  constructor(
    private data: DataService,
    private routeService: RouteService,
    private route: ActivatedRoute,
  ) {
    this.currentPage = this.routeService.Pages.Item
  }

  ngOnInit(): void {
    let sectionId = this.route.snapshot.url[1].path
    let itemId = this.route.snapshot.url[2].path
    this.sectionItem = this.data.getSectionItem(sectionId, itemId)
  }
  getBlogs(blogIds: [number]) {
    return this.data.getBlogs().filter( i =>  blogIds.includes(i.id)).sort((n1,n2) => {return - n2.id + n1.id})
  }
}
