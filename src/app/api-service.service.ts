import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { WelcomescreenComponent } from './welcomescreen/welcomescreen.component';
import { MainCarouselComponent } from './mCarousel/main-carousel/main-carousel.component';


@Injectable({
  providedIn: 'root',
})
export class ApiServiceService {
  selectedScreenId:any = null ;

  private http = inject(HttpClient) 

  constructor() {}


  getProfile(): Observable<any> {
    const url = 'https://app.pishow.tv/acms/subscriber/getProfilesListBySubscriber/630383ffbf448c47a0a81413';
    return this.http.get(url);
  }

  

  postHome(body: {pageName: string;}): Observable<any> {
    const url = 'https://app.pishow.tv/acms/contents/getTvAppHomePageContentsInfoList';
    return this.http.post(url,body);
  }

  getContinueWatch(): Observable<any> {
    const url = 'https://json.onnetsystems.dev/bins?id=w7h6aiaQF';
    return this.http.get(url);
  }
  }