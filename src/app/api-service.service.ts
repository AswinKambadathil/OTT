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


  getData(): Observable<any> {
    const url = 'https://api.postman.com/collections/23825578-5e314afb-9f4c-4082-bbe3-c7e9fc28ac2b?access_key=PMAT-01HNYB81PCF7DD69XWSNM90V16';
    return this.http.get(url);
  }

  // setSelectedScreenId(id: number) {
  //   this.selectedScreenId = id;
  //   console.log("Selected Screen ID set to:", this.selectedScreenId);
  // }

  // getSelectedScreenId() {
  //   console.log("Retrieving Selected Screen ID:", this.selectedScreenId);
  //   return this.selectedScreenId;
  // }
}
