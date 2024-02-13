import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class ApiServiceService {
  selectedScreenId:any = null ;

  private http = inject(HttpClient)  
  constructor() {}


  getProfilelis(): Observable<any> {
    return this.http.get(
      `https://app.pishow.tv/acms/subscriber/getProfilesListBySubscriber/630383ffbf448c47a0a81413`
    );
  }

  setSelectedScreenId(id: number) {
    this.selectedScreenId = id;
    console.log("Selected Screen ID set to:", this.selectedScreenId);
  }

  getSelectedScreenId() {
    console.log("Retrieving Selected Screen ID:", this.selectedScreenId);
    return this.selectedScreenId;
  }
}
