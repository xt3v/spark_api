import { Component, OnInit } from '@angular/core';
import { ItemTypeConfigfields } from './options';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-item-type',
  templateUrl: './item-type.component.html',
  styleUrls: ['./item-type.component.scss'],
})
export class ItemTypeComponent implements OnInit {
  // formItems$: Observable<FormBase<any>[]>;
  formItems: any = ItemTypeConfigfields
  url: string = "item-type-configs/"
  instance: any;
  
  formGroupOrder = [
    ['name'],
    ['description']
  ]


  constructor(
    private route: ActivatedRoute,
  ) {
    this.route.queryParams.subscribe(params => {
      if (params.hasOwnProperty("id")) {
        this.instance = params
        console.log(this.instance)
      }
    });
  }

  onPostedData(data: any) {
    console.log(data)
  }

  ngOnInit(): void {

  }

}
