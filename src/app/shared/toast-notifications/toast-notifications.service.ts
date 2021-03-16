import { Injectable, TemplateRef } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToastNotificationsService {

  constructor() { }

  toasts: any[] = [];

  show(text: string | TemplateRef<any>, options: any = {}) {
    this.toasts.push({ text, ...options });
  }
  toastarray(){
    return this.toasts;
  }
  remove(toast: any) {
    this.toasts = this.toasts.filter(t => t !== toast);
  }
}
