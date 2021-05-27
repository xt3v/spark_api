import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MY_EXAMPLE_OPTIONS_DATA } from './myfields';
import { MyInputModel} from './myinput/model';
import { FormBuilder, FormGroup, FormControl, AbstractControl, Validators } from '@angular/forms';
import { HttpService } from 'src/app/services';


@Component({
  selector: 'app-myform',
  templateUrl: './myform.component.html',
  styleUrls: ['./myform.component.scss']
})
export class MyformComponent implements OnInit {

  @Input()
  formGroup: FormGroup = new FormGroup({});

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
  url: string = ""
  @Input()
  formGroupOrder!: Array<Array<string>>;

  @Input() loading: boolean = false;

  initial: boolean = false
  formErrors: any = {}
  detailErrors: any = []
  isLoading: boolean = false;
  constructor(
    private fb: FormBuilder,
    private http: HttpService

  ) {
  }

  ngOnChanges() {
    if (this.formGroupOrder && !this.initial) {
      this.initial = false
      const fields = this.formItems.actions.POST;
      const possibleFields = this.formGroupOrder.reduce((acc, val) => acc.concat(val), [])

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
  }

  getDescriptionObject(formControlName: string) {
    return this.formItems.actions.POST[formControlName];
  }

  getFieldNameErros(formControlName: string) {
    return this.formErrors[formControlName]
  }

  ngOnInit(): void {
  }

  showLoader(status: boolean) {
    this.isLoading = status
    this.isLoading$.emit(status)
  }

  dataReceived() {
    this.detailErrors = []
    if (true) {
      const data = { ...this.formGroup.value, ...this.extraParams }
      if (this.isValidationOnly) {
        this.onValidatedData.emit(data)
      } else {
        this.sendDataHttp(data)
      }
    } else { }
  }

  get myFormValid(): boolean {
    return this.formGroup.valid
  }

  sendDataHttp(data: any) {
    this.showLoader(true)
    this.formErrors = []
  }

  getControl(name: string): AbstractControl {
    return this.formGroup.get(name) || new FormControl()
  }

  resetForm() {
    this.formGroup.reset();
  }

  bulkOptions() { }

}
