import { Injectable } from '@angular/core';
import  { FormControl, FormGroup, Validators} from '@angular/forms';
import {FormBase  } from '../../core/models/form-base';

@Injectable()
export class FormControlService {

  constructor() { }

  toFormGroup( form: FormBase<string>[] ) {
    const group:any = {};

    form.forEach(item => {
      group[item.key] = item.required ? new FormControl(item.value || '', Validators.required) : new FormControl(item.value || '');
    });

    return new FormGroup(group);
  }
}
