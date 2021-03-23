import { Component, OnInit, forwardRef } from '@angular/core';
import { FormControl, FormGroup, Validators, NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-textarea-with-count',
  templateUrl: './textarea-with-count.component.html',
  styleUrls: ['./textarea-with-count.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TextareaWithCountComponent),
      multi: true
    }]
})
export class TextareaWithCountComponent implements OnInit, ControlValueAccessor {

  count: number = 0
  fistTime = true
  areaCountFormGroup = new FormGroup({
    area_count: new FormControl('', Validators.required)
  })

  constructor() { }

  ngOnInit(): void {
    this.onChanges()
  }
  onChange: any = () => { }
  onTouch: any = () => {
    console.log("touched...")
  }
  writeValue(obj: any): void {
    this.areaCountFormGroup.patchValue({
      area_count: obj
    })
  }
  registerOnChange(fn: any): void {
    this.onChange = fn
  }
  registerOnTouched(fn: any): void {
    this.onTouch = fn
  }

  onChanges(): void {
    this.areaCountFormGroup.valueChanges.pipe(
      debounceTime(500),
      distinctUntilChanged()
    ).subscribe(elem => {
      if (!this.fistTime) {
        this.onChange(elem.area_count)
        let count = 0
        if (elem.area_count) {
          count = elem.area_count.split(',').filter((e: any) => e != "").length
        }
        this.count = count
      }
      this.fistTime = false

    })
  }
}
