import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  json: any;

  constructor(
    private http: HttpClient
  ) { }

  loadConfig() {
    return this.http.get('./assets/config/config.json').toPromise().then(config => this.json = config);
  }
}
