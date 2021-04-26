import { Injectable, TemplateRef } from '@angular/core';
import { Subject } from 'rxjs';

export interface Notice {
  message: string;
  style: string;
}
@Injectable({
  providedIn: 'root'
})
export class ToastNotificationsService {
  
  constructor() { }

  private noticeSource = new Subject<Notice | null>();
  notice = this.noticeSource.asObservable();
  
  update(message: string, style: string) {
    const notice: Notice= { message, style };
    this.noticeSource.next(notice);
  }
  // remove(toast: any) {
  //   this.toasts = this.toasts.filter(t => t !== toast);
  // }
}
