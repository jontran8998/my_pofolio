import { Injectable } from '@angular/core';
import sections from '../../../../../data/sections.json'
import contact from '../../../../../data/contact.json'
import blogs from '../../../../../data/blogs.json'


@Injectable({
  providedIn: 'root'
})
export class DataService {
  sections: Array<any>
  contact: { [key: string]: any }
  profile: { [key: string]: any }
  blogs: { [key: string]: any }
  constructor() {
    this.sections = sections
    this.contact = contact
    this.blogs = blogs
  }

  public getBlogs() {
    return this.blogs
  }

  public getSections() {
    return this.sections
  }

  public getContact() {
    return this.contact
  }

  public getSectionItem(sectionId: string, itemId: string) {
    for (let section of this.sections) {
      if (`${section.id}` === `${sectionId}`) {
        for (let item of section.items) {
          if (`${item.id}` === `${itemId}`) {
            return item
          }
        }
      }
    }
  }
}
