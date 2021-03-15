import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MY_EXAMPLE_OPTIONS_DATA } from './myfields';
import { MyInputModel, InputType } from './myinput/model';
import { FormBuilder, FormGroup, FormControl, AbstractControl, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

import { from } from 'rxjs';
import { FormItemService } from 'src/app/services/forms/form-item.service';
const endpoint = environment.APIEndpoint;
const endpointV1 = environment.APIv1Endpoint;
@Component({
  selector: 'app-myform',
  templateUrl: './myform.component.html',
  styleUrls: ['../myform/myform.component.scss']
})
export class MyformComponent implements OnInit {

  @Input()
  formGroup: FormGroup = new FormGroup({});

  @Input()
  submitButtonText: string = "Post"

  @Input()
  formItems: any

  @Input()
  extraParams: any = {}

  @Output()
  onValidatedData = new EventEmitter<any>();

  @Output()
  onPostedData = new EventEmitter<any>();

  @Output()
  isLoading$ = new EventEmitter<boolean>();

  @Input()
  isValidationOnly: boolean = false

  @Input()
  tabbedItems: any = [];
  @Input()
  tabbed: boolean = false;

  @Input()
  url: string = ""
  _instance: any
  instanceChanged = false
  isNew: boolean = true
  @Input()
  set instance(value: any) {
    this._instance = value
    this.instanceChanged = true
  }

  get instance() {
    return this._instance
  }

  @Input()
  formGroupOrder!: Array<Array<string>>;

  @Input() loading: boolean = false;
  @Input() cardTitle: string = 'Form Title';

  initial: boolean = false
  formErrors: any = {}
  detailErrors: any = []
  isLoading: boolean = false;
  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private _formService: FormItemService

  ) {

  }
  ngOnChanges() {
    if (this.formGroupOrder && !this.initial) {
      this.initial = false
      const fields = this.formItems.actions.POST;
      const possibleFields = this.formGroupOrder.reduce((acc, val) => acc.concat(val), [])
      // console.log(this.isValidationOnly)
      for (var key in fields) {
        const field = fields[key];
        const myinputfield = MyInputModel.fromJson(key, field);
        if (field.read_only || !possibleFields.includes(key)) {
          continue
        }
        const defaultField = field.type == "boolean" ? false : ""
        this.formGroup.addControl(
          key, new FormControl(defaultField, [
          ])
        )
        const fieldcontrol = this.formGroup.controls[key]
        const validators = []
        if (field.required) {
          validators.push(Validators.required)
        }
        if (field.max_length) {
          validators.push(Validators.maxLength(field.max_length))
        }
        if (validators.length > 0) {
          fieldcontrol.setValidators(validators)
        }

      }
    }
    this.checkInstanceChangesUpdateForm()

  }

  mapAllTheMultifieldEditSourceFields(): any {
    var instance = { ...this.instance }// this.instance
    if ("POST" in this.formItems.actions) {
      const fields = this.formItems.actions.POST
      for (var key in fields) {
        const field = fields[key]
        const type = field.type
        if (type == "multifield") {
          if ("edit_source_field" in field) {
            const editSource = field.edit_source_field
            instance[key] = instance[editSource]
          }
        }
      }
    }
    return instance
  }
  checkInstanceChangesUpdateForm() {
    if (this.instanceChanged) {
      this.instanceChanged = false
      if (this.instance) {
        const inst = this.mapAllTheMultifieldEditSourceFields()
        this.formGroup.patchValue(
          inst
        )
        this.isNew = this.instance.id == null
        this.formGroup.markAllAsTouched()
      }
    }
  }

  getDescriptionObject(formControlName: string) {
    return this.formItems.actions.POST[formControlName];
  }

  getFieldNameErros(formControlName: string) {
    return this.formErrors[formControlName]
  }

  ngOnInit(): void {
    this.url = `${endpointV1}${this.url}`
  }
  showLoader(status: boolean) {
    this.isLoading = status
    this.isLoading$.emit(status)
  }

  dataReceived() {
    this.detailErrors = []
    if (this.formGroup.valid) {
      const data = { ...this.formGroup.value, ...this.extraParams }
      if (this.isValidationOnly) {
        this.onValidatedData.emit(data)
      } else {
        this.sendDataHttp(data)
      }
    } else {
    }
  }

  get myFormValid(): boolean {
    return this.formGroup.valid
  }

  get formAction() {
    return this.isNew ? 'Add' : 'Update'
  }

  sendDataHttp(data: any) {
    this.showLoader(true)
    this.formErrors = [];
    const post_data = {
      url: this.isNew ? this.url : `${this.url}${this.instance.id}`,
      formData: data
    }

    this._formService.postForm(this.isNew, post_data).subscribe(res => {
      this.onPostedData.emit(res)
      this.showLoader(false)
      if (this.isNew) {
        this.resetForm();
      }
    }, error => {
      this.showLoader(false)
      const status = error.status
      if (status == 401) {
        this.detailErrors.push("Login required.")
      } else if (status == 400) {
        const formErrors = error.error;
        if ("detial" in formErrors) {
          this.detailErrors.push(formErrors.detial)
        }
        this.formErrors = formErrors
      }
    })
  }

  getControl(name: string): AbstractControl {
    return this.formGroup.get(name) || new FormControl()
  }

  resetForm() {
    this.formGroup.reset();
  }

  bulkOptions() {

  }

  // onSelectedTab(tab: string) {
  //   console.log("THE TAB IN MYFORM", tab);
  //   this.onSelectTab.emit(tab)
  // }

}
