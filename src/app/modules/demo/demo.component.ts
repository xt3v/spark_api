import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  formGroup = this.formBuilder.group({
    people: [''],
  })

  onSubmit() {
    console.log('clicked')
  }

  output: string = '';

}
