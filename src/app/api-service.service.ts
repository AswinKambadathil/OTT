import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class ApiServiceService {


  private http = inject(HttpClient)  
  constructor() {}


  getProfileList(): Observable<any[]> {
    return this.http.get<any>('https://app.pishow.tv/acms/subscriber/getProfilesListBySubscriber/630383ffbf448c47a0a81413')
      .pipe(
        map(response => response.data) 
      );
  }

}
