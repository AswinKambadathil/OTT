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
    // getPack(): Observable<any[]> {
    //   return this.http.get<any[]>(
    //     'https://json.onnetsystems.dev/bins?id=fomz6f28z'
    //   );
    // }
    // getPlan(): Observable<any[]> {
    //   return this.http.get<any[]>(
    //     'https://json.onnetsystems.dev/bins?id=cSbwiCl1M'
    //   );
    // }
  
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
              if (element.categoryType === "FTA" && element.ftaInfo != null && Array.isArray(element.ftaInfo.ftaList)) {
                ftaArray.push(...element.ftaInfo.ftaList); 
              }
            }
            return ftaArray;
          })
        );
        // && element.ftaInfo.ftaListName === "Movie Channels - Live Tv"
    }
    
  
    providerschannel(): Observable<any[]> {
      return this.http.get('https://app.pishow.tv/acms/packages/getPackagesInfoList').pipe(
        map((response: any) => {
          let providerInfo = [];
          for (let packageData of response.data) {
           
            
            for (let provider of packageData.providersInfo) {
              // console.log(packageData.providerInfo[0]);
              
              providerInfo.push(provider);
            }
          }
          return providerInfo;
        })
      );
    }
    
    getPacks(): Observable<any[]> {
      return this.http.get('https://app.pishow.tv/acms/packages/getPackagesInfoList').pipe(
        map((response: any) => {
          return response.data;
        })
      );
    }
    
  
}
