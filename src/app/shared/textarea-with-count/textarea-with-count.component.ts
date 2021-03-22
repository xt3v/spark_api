import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-textarea-with-count',
  templateUrl: './textarea-with-count.component.html',
  styleUrls: ['./textarea-with-count.component.scss']
})
export class TextareaWithCountComponent implements OnInit {

  count: number = 0
  areaCountFormGroup = new FormGroup({
    area_count: new FormControl('', Validators.required)
  })

  constructor() { }

  ngOnInit(): void {
    this.onChanges()

  }

  onChanges(): void {
    this.areaCountFormGroup.valueChanges.pipe(
      debounceTime(500),
      distinctUntilChanged()
    ).subscribe(elem => {
      const count = elem.area_count.split(',').length
      this.count = count

    })
  }
}
