import { Injectable, ViewChild,ElementRef,Renderer2, RendererFactory2 } from '@angular/core';
import { Subject } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
@Injectable()
export class ModalsService {
  private _renderer: Renderer2;
  @ViewChild('modal-backdrop', { static: false }) divModalBackdrop!: ElementRef;
  @ViewChild('modal-open', { static: false }) divModalOpen!: ElementRef;

  confirmModalSubject: Subject<any> = new Subject<any>();

  constructor(
    rendererFactory:RendererFactory2
  ) { 
    this._renderer = rendererFactory.createRenderer(null, null);
  }

  createModalBackdropDiv() {
    this.divModalBackdrop = this._renderer.createElement('div');
    const divClasses = 'modal-backdrop fade show';
    divClasses.split(' ').forEach((className: string) => {
      this._renderer.addClass(this.divModalBackdrop, className);
    });
    
    this._renderer.addClass(document.body, 'modal-open');

    this._renderer.appendChild(document.body, this.divModalBackdrop);

    return this.divModalBackdrop;
  }

  removeModalBackdropDiv() {

    this._renderer.removeClass(document.body, 'modal-open');
    this._renderer.removeAttribute(document.body, 'class');

   return this._renderer.removeChild(document.body, this.divModalBackdrop);
  }

  setConfirmation(message:string, ok: () => void, cancel: () => void):any {
    const _this = this;
    this.createModalBackdropDiv();
    this.confirmModalSubject.next({
      type: 'prompt',
      text: message,
      ok(): any {
        _this.confirmModalSubject.next();
        _this.removeModalBackdropDiv();
        ok();
      },
      cancel(): any {
        _this.confirmModalSubject.next();
        _this.removeModalBackdropDiv();
        cancel();
      }
    });
  }

  confirm(message: string, ok: () => void, cancel: () => void ): any {
    this.setConfirmation(message, ok, cancel);
  }
}
