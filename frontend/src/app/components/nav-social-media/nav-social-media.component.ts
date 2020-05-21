import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data/data.service';
import { environment } from 'src/environments/environment';

declare var $: any;

@Component({
  selector: 'app-nav-social-media',
  templateUrl: './nav-social-media.component.html',
  styleUrls: ['./nav-social-media.component.scss']
})
export class NavSocialMediaComponent implements OnInit {
  social: Array<any>;
  currentPage: string
  constructor( private data: DataService) { }

  ngOnInit(): void {
    this.social = this.data.getContact().social[environment.CONFIG_WEB]
  }
}
