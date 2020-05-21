import { Component, OnInit, Input } from '@angular/core';
import { DataService } from 'src/app/services/data/data.service';
import { RouteService } from 'src/app/services/route/route.service';

@Component({
  selector: 'app-page-contact',
  templateUrl: './page-contact.component.html',
  styleUrls: ['./page-contact.component.scss']
})
export class PageContactComponent implements OnInit{
  currentPage:string
  
  constructor(private routeService : RouteService) { 
    this.currentPage = this.routeService.Pages.Contact
  }

  ngOnInit(): void {
  }
}