import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import { Location } from "@angular/common";
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private url: string = Location.joinWithSlash(environment.BACKEND_ENDPOINT, "email")

  private
  constructor(private http: HttpClient) { }

  public post(data: any): Observable<any> {
    return this.http.post<any>(
      this.url,
      data, { responseType: 'text' as 'json' })
  }
}
