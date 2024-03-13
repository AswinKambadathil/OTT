import { Injectable, signal } from '@angular/core';
import { Observable, Subject, take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {
  private buttonCodeSubject = new Subject<number>();
  delayClick = false;

  constructor() { }

  getButtonCodeObservable(): Observable<number> {
    console.log("at get Button Code Observable",this.buttonCodeSubject);
    
    return this.buttonCodeSubject.asObservable();
  }

  propagateButtonCode(code: number): void {
    console.group();
    console.log("at service Propgate Button Code delay Click", this.delayClick);
    
    if (!this.delayClick) {
      console.log("at service Propgate Button Code code", code);
      this.buttonCodeSubject.next(code);
      this.delayClick = true;
      console.log("at service Propgate Button Code delay Click", this.delayClick);
      setTimeout(() => {
        this.delayClick = false
        console.log("at service Propgate Button Code delay Click set time Out", this.delayClick);
      }, 200);
    }
    console.groupEnd();
  }
}
