import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data/data.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.scss']
})

export class ContactInfoComponent implements OnInit {
  social: Array<any>;
  item: any

  constructor( private data: DataService ) { }

  ngOnInit(): void {
    this.social = this.data.getContact().social[environment.CONFIG_WEB]
    this.item = {description: this.data.getContact().description}
  }
}
