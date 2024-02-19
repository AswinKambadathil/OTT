import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class ApiServiceService {
  selectedScreenId:any = null ;

  private http = inject(HttpClient) 

  constructor() {}


  getProfileList(): Observable<any[]> {
    return this.http.get<any>('https://app.pishow.tv/acms/subscriber/getProfilesListBySubscriber/630383ffbf448c47a0a81413')
      .pipe(
        map((response: { data: any; }) => response.data) 
      );
  }
  getData(): Observable<any> {
    const url = 'https://api.postman.com/collections/23825578-5e314afb-9f4c-4082-bbe3-c7e9fc28ac2b?access_key=PMAT-01HNYB81PCF7DD69XWSNM90V16';
    return this.http.get(url);}


}
