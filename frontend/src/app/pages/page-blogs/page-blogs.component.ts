import { Component, OnInit, Input } from '@angular/core';
import { DataService } from 'src/app/services/data/data.service';
import { RouteService } from 'src/app/services/route/route.service';
import { isNgTemplate } from '@angular/compiler';

@Component({
  selector: 'app-page-blogs',
  templateUrl: './page-blogs.component.html',
  styleUrls: ['./page-blogs.component.scss']
})
export class PageBlogsComponent implements OnInit {
  currentPage: string
  sections: any

  constructor(
    private dataService: DataService,
    private routeService: RouteService,
  ) {
    this.currentPage = this.routeService.Pages.Blogs
  }

  ngOnInit(): void {
    let sections = this.dataService.getSections()

    for (let i =0; i< sections.length; i ++){
      sections[i].items = sections[i].items.filter(item=> item.details !== undefined)
    }
    for (let i =0; i< sections.length; i ++){
      sections = sections.filter(section=> section.items.length !== 0)
    }

    this.sections = sections
  }

  getItemRoute(sectionId, itemId){
    return this.routeService.getRouteItem(sectionId, itemId)
  }

  getBlogs(blogIds: [number]) {
    return this.dataService.getBlogs().filter( i =>  blogIds.includes(i.id)).sort((n1,n2) => {return - n2.id + n1.id})
  }
}
