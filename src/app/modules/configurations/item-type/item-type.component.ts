import { Component, OnInit } from '@angular/core';

import { FormItemService } from '../../../services/forms/form-item.service'
import { FormBase } from '../../../core/models/form-base';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-item-type',
  templateUrl: './item-type.component.html',
  styleUrls: ['./item-type.component.scss'],
  providers: [ FormItemService ]
})
export class ItemTypeComponent implements OnInit {
  formItems$: Observable<FormBase<any>[]>;

  constructor(
    _formItemService: FormItemService
  ) { 
    this.formItems$ = _formItemService.formItemTypeConfigurations();
  }

  ngOnInit(): void {
  }

}
