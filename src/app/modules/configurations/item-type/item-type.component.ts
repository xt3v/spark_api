import { Component, OnInit } from '@angular/core';
import { ItemTypeConfigfields } from './options';

@Component({
  selector: 'app-item-type',
  templateUrl: './item-type.component.html',
  styleUrls: ['./item-type.component.scss'],
})
export class ItemTypeComponent implements OnInit {
  // formItems$: Observable<FormBase<any>[]>;
  formItems: any = ItemTypeConfigfields
  url: string = "item-type-configs/"

  formGroupOrder = [
    ['name'],
    ['description']
  ]

  constructor(
  ) {
  }

  onPostedData(data: any) {
    console.log(data)
  }

  ngOnInit(): void {

  }

}
