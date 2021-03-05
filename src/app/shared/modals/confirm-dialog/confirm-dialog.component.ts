import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ModalsComponent } from '../basic/modals.component';
import { ModalsService } from '../modals.service';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss']
})
export class ConfirmDialogComponent extends ModalsComponent implements OnInit, OnDestroy {
  @Input() okButton: string = 'OK';
  @Input() hasCancelButton: boolean = true;
  
  confirm_message:any;
  confirmModalSubscription:any;

  constructor(
    private _modalService: ModalsService
  ) {
    super();
   }

  ngOnInit(): void {
    this.confirmModalSubscription = this._modalService.confirmModalSubject.subscribe(message => {
      console.log("SHOULD OPEN THE MODAL", message);
      this.confirm_message = message;
     })
  }

  ngOnDestroy(): void {
    if (this.confirmModalSubscription) {
      this.confirmModalSubscription.unsubscribe();
    }
  }

}
