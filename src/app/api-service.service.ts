import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class ApiServiceService {


  private http = inject(HttpClient)  
  constructor() {}


  getProfileList(): Observable<any[]> {
    const requestData = {
      pageName: 'Home'
    };
   
    return this.http.post<any[]>('https://app.pishow.tv/acms/contents/getTvAppHomePageContentsInfoList', requestData);
  }

}
