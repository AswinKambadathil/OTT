import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpWrapperService {

  private http = inject(HttpClient)
  constructor() { }

  get(url: string){
  return  this.http.get(url, {})
  }
  post(){}
  put(){

  }
  delete(){}
}
