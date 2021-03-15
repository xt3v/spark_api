import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, AbstractControl } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-myinput',
  templateUrl: './myinput.component.html',
  styleUrls: ['./myinput.component.scss']
})
export class MyinputComponent implements OnInit {
  @Input()
  formControName!: string

  @Input()
  form!: FormGroup
  errors: any = []
  @Input()
  data: any

  @Input()
  formErrors: any

  choices: Array<any> = []
  intital: boolean = false
  isLoading: boolean = false
  constructor(
    private http: HttpClient
  ) { }

  ngOnChanges() {
    if (this.form && this.formControName && !this.intital) {
      this.intital = true
      this.formControl.valueChanges.subscribe((val) => {
        this.sortValidationErrors(true)
      })
      // Check if its a field 
      if (this.data.type == "field") {
        this.getUrlBasedOptions()
      }
      if (this.data.choices) {
        this.choices = this.data.choices
      }
    }
    if (this.formControName) {
      this.sortValidationErrors()
    }
  }
  showLoader(status: boolean) {
    this.isLoading = status
  }
  getUrlBasedOptions() {
    if (!this.data.url) return
    this.showLoader(true)
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer micha'
    })
    this.http.get<any>(this.data.url, { headers: headers }).subscribe(res => {
      this.showLoader(false)
      this.choices = res.results.map((value: any) => {
        return {
          "value": value.id,
          "display_name": value[this.data.display_name]
        }
      });
    }, error => {
      this.showLoader(false)
      const status = error.status
    })
  }
  sortValidationErrors(clearFormError = false) {
    this.errors = []
    if (this.formControl.untouched) {
      return
    }

    //Clear the form errors on value changes only
    if (clearFormError) {
      delete this.formErrors[this.formControName]
    }

    // Normal formControl errors
    if (this.formControl.errors) {
      this.errors = Object.keys(this.formControl.errors)
    }

    // Check other form control errors from outside(from the backend)
    if (this.formControName in this.formErrors) {
      this.errors = this.errors.concat(this.formErrors[this.formControName])
    }

    // If the control is not marked as invalid force it
    if (this.errors.length > 0 && this.formControl.valid) {
      this.formControl.setErrors({ '': true })
    }

  }

  get formControl(): AbstractControl {
    return this.form.controls[this.formControName]
  }

  get formControlType(): string {
    if (this.data.obscure) {
      return "password"
    }
    switch (this.data.type) {
      case 'integer':
        return "number"
        break;
      case 'string':
        if (this.data.max_length && this.data.max_length > 100) {
          return 'textArea'
        }
        return "text"
        break;
      case 'datetime':
        return "date"
        break;
      case 'datetime':
        return "date"
        break;
      case 'field':
        if (this.data.multiple) {
          return 'multiplechoice'
        }
        return "choice"
        break;
      default:
        return this.data.type
        break;
    }
  }

  get displayControlName() {
    return this.data.label //this.formControName.replace("_", " ")
  }

  ngOnInit(): void {

  }


}
