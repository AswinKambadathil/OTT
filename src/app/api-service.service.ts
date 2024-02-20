import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';
import res from './respnse';

@Injectable({
  providedIn: 'root',
})
export class ApiServiceService {
  private http = inject(HttpClient);
  constructor() {}

  getProfileList(): Observable<any[]> {
    const requestData = {
      pageName: 'Home',
    };

    return this.http.post<any[]>(
      'https://app.pishow.tv/acms/contents/getTvAppHomePageContentsInfoList',
      requestData
    );
  }

  getLanguage(): Observable<any[]> {
    return this.http.get<any[]>(
      'https://json.onnetsystems.dev/bins?id=fQK8nZErq'
    );
  }
  getGenre(): Observable<any[]> {
    return this.http.get<any[]>(
      'https://json.onnetsystems.dev/bins?id=eVX1qXkQg'
    );
  }
  getPack(): Observable<any[]> {
    return this.http.get<any[]>(
      'https://json.onnetsystems.dev/bins?id=mrE8Q7WU5'
    );
  }
  getPlan(): Observable<any[]> {
    return this.http.get<any[]>(
      'https://json.onnetsystems.dev/bins?id=cSbwiCl1M'
    );
  }

  ftaChannels(): Observable<any[]> {
    return this.http
      .post(
        'https://app.pishow.tv/acms/contents/getTvAppHomePageContentsInfoList',
        { pageName: 'Home' }
      )
      .pipe(
        map((response: any) => {
          let ftaArray = [];
          for (let element of response.data.categoryList) {
            if (element.ftaInfo != null && Array.isArray(element.ftaInfo.ftaList)) {
              ftaArray.push(...element.ftaInfo.ftaList); 
            }
          }
          return ftaArray;
        })
      );
  }
}
