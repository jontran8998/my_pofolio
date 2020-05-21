import { Injectable } from '@angular/core';

export namespace Pages {
  export const Profile: string = `profile`
  export const Contact: string = `contact`
  export const Resume: string = `resume`
  export const Item: string = `details`
  export const Blogs: string = `blogs`
}


@Injectable({
  providedIn: 'root'
})
export class RouteService {
  constructor() { }
  public Pages = Pages;


  public getRefIdItemDetail(detailId){
    return `detail-${detailId}`
  }

  public getRefIdItem(sectionId, itemId){
    return `section-${sectionId}-${itemId}`
  }

  public getRefIdSection(sectionId) {
    return `section-${sectionId}`
  }

  public getRouteItem(sectionId, itemId){
    return `${Pages.Item}/${sectionId}/${itemId}`
  }

  public getRouteItemDetail(sectionId, itemId, detailId){
    let refId:string = this.getRefIdItemDetail(detailId)
    return `${this.getRouteItem(sectionId, itemId)}#${refId}`
  }

  public getRouteSectionItem(sectionId, itemId){
    let refId:string = this.getRefIdItem(sectionId, itemId)
    return `${Pages.Profile}#${refId}`
  }

  public getRouteSection(sectionId){
    let refId:string = this.getRefIdSection(sectionId)
    return `${Pages.Profile}#${refId}`
  }

}
