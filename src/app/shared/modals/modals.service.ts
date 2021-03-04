import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalsService {
  private subject = new Subject<any>();

  // constructor() { }

  setConfirmation(message:string, ok: () => void, cancel: () => void):any {
    console.log('REACHES HERE ALSO?');
    const _this = this;
    this.subject.next({
      type: 'confirm',
      text: message,
      ok(): any {
        _this.subject.next();
        ok();
      },
      cancel(): any {
        _this.subject.next();
        cancel();
      }
    });
  }

  confirm(message: string, ok: () => void, cancel: () => void ): any {
    console.log('REACHES HERE?');
    
    this.setConfirmation(message, ok, cancel);
  }

  getMessage(): Observable<any> {
    return this.subject.asObservable();
  }
}
