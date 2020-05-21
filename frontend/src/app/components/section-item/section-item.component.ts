import { Component, OnInit, Input } from '@angular/core';
import { DataService } from 'src/app/services/data/data.service';
import { RouteService } from 'src/app/services/route/route.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-section-item',
  templateUrl: './section-item.component.html',
  styleUrls: ['./section-item.component.scss']
})
export class SectionItemComponent implements OnInit {
  @Input() sectionId: string
  @Input() items: Array<any>;
  @Input() disableButton: boolean = false;
  sortedItems: Array<any>;
   
  constructor(private routeService : RouteService) { }

  ngOnInit(): void {
    this.sortedItems = this.items.sort((n1,n2) => {return n2.id - n1.id}).filter(obj => {
      return obj.config[environment.CONFIG_WEB] === true
    })
  }

  getRefIdItem(item: any) {
    return this.routeService.getRefIdItem(this.sectionId, item)
  }

  public getRouteDetails(itemId) {
    return this.routeService.getRouteItem(this.sectionId, itemId)
  }

  hasDetails(item: any) {
    if (item.hasOwnProperty("details")) {
      if (item.details.length > 0) {
        return true
      }
    }
    return false
  }


}
