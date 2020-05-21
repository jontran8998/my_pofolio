import { Component, OnInit, AfterViewInit } from '@angular/core';
import { DataService } from 'src/app/services/data/data.service';
import { RouteService, Pages } from 'src/app/services/route/route.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-page-profile',
  templateUrl: './page-profile.component.html',
  styleUrls: ['./page-profile.component.scss']
})
export class PageProfileComponent implements OnInit {
  sections = [];
  heading: string = ""
  currentPage:string

  constructor(
    private data : DataService,
    private routeService : RouteService
  ) { 
    this.currentPage = this.routeService.Pages.Profile
  }

  ngOnInit(): void {
    // get sections
    this.sections = this.data.getSections()

    // process animation
    let animation = "loadmoveup"
    for (let section of this.sections){
      section["animation"] = animation
      animation = "scrollmoveup"
    }

  }
  getRefIdSection(section){
    return this.routeService.getRefIdSection(section)
  }
}
