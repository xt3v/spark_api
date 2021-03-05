import { Component, OnInit, Input } from '@angular/core';
import { ModalsComponent } from '../basic/modals.component';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss']
})
export class ConfirmComponent extends ModalsComponent implements OnInit {
  @Input() message: string = 'Are you sure you want to delete?';

  constructor(
  ) { 
    super();
  }

  ngOnInit(): void {
  }

}
