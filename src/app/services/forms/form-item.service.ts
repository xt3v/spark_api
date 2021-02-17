import { Injectable } from '@angular/core';
import { TextareaItem, FormBase, TextItem } from '../../core/models/form-base';
import { of } from 'rxjs';

@Injectable()
export class FormItemService {

  constructor() { }

  formItemTypeConfigurations() {
    const formItems: FormBase<string>[] = [
      new TextItem({
        key: 'itemTypeConfigName',
        label: 'Name',
        value: '',
        type: 'text',
        required: true,
        ariaLabel: 'Item type configuration name',
        order: 1
      }),

      new TextareaItem({
        key: 'itemTypeConfigDescription',
        label: 'Description',
        value: '',
        type: 'textarea',
        required: false,
        ariaLabel: 'Item type configuration description',
        rows: 15,
        order: 2
      })
    ];
    return of(formItems.sort((a,b) => a.order - b.order));
  }
}
