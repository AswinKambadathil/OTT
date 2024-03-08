import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, of } from 'rxjs';
import res from './response';
import { catchError, map, shareReplay, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class ApiServiceService {
 
  private profileList$!: Observable<any[]>;
  private http = inject(HttpClient)
  private packs$!: Observable<{ data: any[], source: string }>;
  private fta$!:Observable<{ data: any[], source: string }>;
  private lang$!:Observable<{data:any[],source:string}>
  constructor() { }


  getProfileList(): Observable<any[]> {
    if (!this.profileList$) {
      this.profileList$ = this.http.get<any>('https://app.pishow.tv/acms/subscriber/getProfilesListBySubscriber/630383ffbf448c47a0a81413').pipe(
        map((response: { data: any; }) => response.data),
        shareReplay(1) 
      );
    }
    return this.profileList$;
  }


  ftaChannels(): Observable<{ data: any[], source: string }> {
    if (!this.fta$) {
    this.fta$ = this.http.post<any>('https://app.pishow.tv/acms/contents/getTvAppHomePageContentsInfoList', { pageName: 'Home' }).pipe(
        map((response: any) => {
          let ftaArray = [];
          for (let element of response.data.categoryList) {
            if (element.categoryType === "FTA" && element.ftaInfo != null && Array.isArray(element.ftaInfo.ftaList)) {
              ftaArray.push(...element.ftaInfo.ftaList);
            }
          }
          return { data: ftaArray, source: 'API' };
        }),
        catchError(error => {
          console.error('Error fetching data from API:', error);
          return of({ data: [], source: 'Cache' });
        }),
        shareReplay(1),
        tap(_ => {
          console.log('Data fetched from API and cached.');
        })
      );
    }
    return this.fta$;
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

  getPacks(): Observable<{ data: any[], source: string }> {
    if (!this.packs$) {
      this.packs$ = this.http.get<any>('https://app.pishow.tv/acms/packages/getPackagesInfoList').pipe(
        map((response: any) => {
          return { data: response.data, source: 'API' };
        }),
        catchError(error => {
          
          return of({ data: [], source: 'Cache' });
        }),
        shareReplay(1),
        tap(_ => {
          console.log('Data fetched from API and cached.');
        })
      );
    }
    return this.packs$;
  }
  postContinue(body: { pageName: string; }): Observable<any> {
    const url = 'https://app.pishow.tv/acms/contents/getTvAppHomePageContentsInfoList';
    return this.http.post(url, body).pipe(map((response:any)=>{
      response = res
      let featuredInfo:any = []
      let defaultInfo:any = []
      let bannerInfo:any = []
      let filterInfo:any = []
      let ftaInfo:any = []
      let programInfo:any = []
      for (let item of response.data.categoryList){
        if(item.featuredInfo){
          featuredInfo.push({categoryName : item.featuredInfo.categoryName, categoryList : item.featuredInfo.contentList})
        }
        if(item.defaultInfo)
        {
          defaultInfo.push({categoryName : item.defaultInfo.categoryName, categoryList : item.defaultInfo.contentList})
        }
        if(item.bannerInfo)
        {
          bannerInfo.push({categoryList : item.bannerInfo.bannerList})
        }
        if(item.ftaInfo)
        {
          ftaInfo.push({categoryName : item.ftaInfo.categoryName, categoryList : item.ftaInfo.ftaList})
        }
        if(item.programInfo)
        {
          programInfo.push(item.programInfo.contentList)
        }
      }
      
      return {featuredInfo,defaultInfo,bannerInfo,filterInfo,ftaInfo,programInfo}
    })
    )
  }
 selectLanguage(): Observable<{ data: any[], source: string }> {
    if (!this.lang$) {
      this.lang$ = this.http.get('https://app.pishow.tv/acms/common/getLanguagesList').pipe(
        map((response: any) => ({
          data: response.data.languageList,
          source: 'API'
        })),
        shareReplay(1)
      );
    }
    return this.lang$;
  }

  updateProfileInfo(profileData: any): Observable<any> {
    return this.http.put('https://app.pishow.tv/acms/subscriberProfiles/updateSubscriberProfilesInfo', profileData);
  }
  
  addNewProfile(newProfile: any): Observable<any> {
    return this.http.post('https://app.pishow.tv/acms/subscriberProfiles/saveSubscriberProfilesInfo',newProfile);
  }

  selectGenre():Observable<any[]>{
    return this.http.get('https://app.pishow.tv/acms/common/getGenreList').pipe(
      map((response: any) => {
        return response.data.genreList;
      })
    );
  }

  profileAvatar():Observable<any[]>{
    return this.http.get('https://app.pishow.tv/acms/common/getAvatarList').pipe(
      map((response:any) =>{
        return response.data.avatarList;
      })
    )
  }

}
