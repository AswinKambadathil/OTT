import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';
import res from './response'

@Injectable({
  providedIn: 'root',
})
export class ApiServiceService {
  selectedScreenId: any = null;

  private http = inject(HttpClient)

  constructor() { }


  getProfileList(): Observable<any[]> {
    return this.http.get<any>('https://app.pishow.tv/acms/subscriber/getProfilesListBySubscriber/630383ffbf448c47a0a81413')
      .pipe(
        map((response: { data: any; }) => response.data)
      );
  }
  getData(): Observable<any> {
    const url = 'https://api.postman.com/collections/23825578-5e314afb-9f4c-4082-bbe3-c7e9fc28ac2b?access_key=PMAT-01HNYB81PCF7DD69XWSNM90V16';
    return this.http.get(url);
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
  getProfile(): Observable<any> {
    const url = 'https://app.pishow.tv/acms/subscriber/getProfilesListBySubscriber/630383ffbf448c47a0a81413';
    return this.http.get(url);
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
  selectLanguage(): Observable<any[]> {
    return this.http.get('https://app.pishow.tv/acms/common/getLanguagesList').pipe(
      map((response: any) => {
        return response.data.languageList;
      })
    );
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
