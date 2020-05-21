import { Component, OnInit } from '@angular/core';
import { RouteService } from 'src/app/services/route/route.service';
import { DataService } from 'src/app/services/data/data.service';

@Component({
  selector: 'app-page-resume-preview',
  templateUrl: './page-resume-preview.component.html',
  styleUrls: ['./page-resume-preview.component.scss']
})
export class PageResumePreviewComponent implements OnInit {
  currentPage: string
  pdfPath: string

  
  constructor( private routeService : RouteService, private dataService:DataService) { 
    this.currentPage = this.routeService.Pages.Resume
  }

  ngOnInit(): void {
    this.pdfPath = "/assets/db/" + this.dataService.getContact().pdfUrf
  }

}
