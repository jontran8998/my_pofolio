import { Component, OnInit, Input } from '@angular/core';
import { DataService } from 'src/app/services/data/data.service';
import { RouteService } from 'src/app/services/route/route.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  avatar: string
  name: string
  sections: Array<any>
  @Input() currentPage: string

  constructor(
    private dataService: DataService,
    private routeService: RouteService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.avatar = this.dataService.getContact().avatar
    this.name = this.dataService.getContact().name
    this.sections = this.dataService.getSections()
  }


  public getRouteItem(sectionId, item) {
    return this.routeService.getRouteSectionItem(sectionId, item)
  }

  public getRouteSection(sectionId) {
    return this.routeService.getRouteSection(sectionId)
  }

  public getRouteItemDetail(sectionId, itemId, detailId) {
    return this.routeService.getRouteItemDetail(sectionId, itemId, detailId)
  }

  public getPdfLink() {
    return "/assets/db/" + this.dataService.getContact().pdfUrf
  }

  public forceHightLightProfile() {
    if (this.currentPage === this.routeService.Pages.Item) {
      return "force-highlight"
    }
    return ""
  }

  public forceHighlightSection(sectionId) {
    if (`${this.route.snapshot.url[0].path}` === this.routeService.Pages.Item) {
      if (`${this.route.snapshot.url[1].path}` === `${sectionId}`) {
        return "force-highlight"
      }
    }
    return ""
  }

  public forceHighlightItem(sectionId, itemId) {
    if (`${this.route.snapshot.url[0].path}` === this.routeService.Pages.Item) {
      if (`${this.route.snapshot.url[1].path}` === `${sectionId}`) {
        if (`${this.route.snapshot.url[2].path}` === `${itemId}`) {
          return "force-highlight"
        }
      }
    }
    return ""
  }
}

