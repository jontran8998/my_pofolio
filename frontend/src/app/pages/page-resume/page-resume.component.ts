import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data/data.service';
import { RouteService } from 'src/app/services/route/route.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-resume',
  templateUrl: './page-resume.component.html',
  styleUrls: ['./page-resume.component.scss']
})
export class PageResumeComponent implements OnInit {
  pdfPath: string

  
  constructor( private routeService : RouteService, private dataService:DataService) { 
  }

  ngOnInit(): void {
    this.pdfPath = "/assets/db/" + this.dataService.getContact().pdfUrf
    this.download(this.pdfPath, "Resume")
  }
  download(url, downloadName) {
    let a = document.createElement("a");
    document.body.appendChild(a);
    a.href = url;
    a.download = downloadName;
    a.click();
    document.body.removeChild(a);
  }
}
