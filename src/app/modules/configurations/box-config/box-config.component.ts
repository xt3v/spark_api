import { Component, OnInit } from '@angular/core';
import { BoxConfigfields } from './options';

@Component({
  selector: 'app-box-config',
  templateUrl: './box-config.component.html',
  styleUrls: ['./box-config.component.scss']
})
export class BoxConfigComponent implements OnInit {
  formItems: any = BoxConfigfields
  url: string = "https://api.spark.sisitech.dev/api/v1/box-configs/"
  formGroupOrder = [
    ['name'],
    ['description'],
    ['items']
  ]
  constructor() { }

  ngOnInit(): void {
  }
  onValidatedData(data: any) {
    console.log(data)
  }
  onPostedData(data: any) {
    console.log(data)
  }

}
