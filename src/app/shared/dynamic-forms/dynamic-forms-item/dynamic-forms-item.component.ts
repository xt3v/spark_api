import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { FormBase } from '../../../core/models/form-base';

@Component({
  selector: 'app-dynamic-forms-item',
  templateUrl: './dynamic-forms-item.component.html',
  styleUrls: ['./dynamic-forms-item.component.scss']
})
export class DynamicFormsItemComponent {
  @Input() item!: FormBase<string>;
  @Input() form!: FormGroup;

  get isValid() {
    return this.form.controls[this.item.key].valid;
  }

  get f() {
    return this.form.controls[this.item.key];
  }

  constructor() { }

}
