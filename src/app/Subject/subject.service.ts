import { Injectable, signal } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {
  private buttonCodeSubject = new Subject<number>();
  delayClick = false;

  constructor() { }

  getButtonCodeObservable(): Observable<number> {
    return this.buttonCodeSubject.asObservable();
  }

  propagateButtonCode(code: number): void {
    if (!this.delayClick) {
      this.buttonCodeSubject.next(code);
      this.delayClick = true;
      setTimeout(() => {
        this.delayClick = false
      }, 200);
    }
  }
}
