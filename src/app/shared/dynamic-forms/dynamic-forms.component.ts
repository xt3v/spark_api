import { Component, OnInit, Input, ViewChild, AfterViewInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBase } from '../../core/models/form-base';
import { CardComponent } from '../card/card.component';
import {FormControlService } from './form-control.service';

@Component({
  selector: 'app-dynamic-forms',
  templateUrl: './dynamic-forms.component.html',
  styleUrls: ['./dynamic-forms.component.scss'],
  providers: [ FormControlService ]
})
export class DynamicFormsComponent implements OnInit {

  @Input() formItems: FormBase<string>[] = [];
  @Input() formButtonName: string = 'Save';
  @Input() loading: boolean = false;
  @Input() cardTitle: string = 'Form Title';

  title: string = '';

  form!: FormGroup;

  constructor(
    private _formControlService: FormControlService
  ) { }

  ngOnInit(): void {
    this.form = this._formControlService.toFormGroup(this.formItems);
  }

  onSubmit() {
    console.log('THE SUBMIT BUTTON SUBMITS');
  }

  resetForm() {
    this.form.reset();
  }

  bulkOptions() {

  }

}
