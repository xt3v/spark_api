import { Component, OnInit } from '@angular/core';
import { ItemConfigfields } from './options';
import { ActivatedRoute, Router, RouterState } from '@angular/router';

@Component({
  selector: 'app-item-config',
  templateUrl: './item-config.component.html',
  styleUrls: ['./item-config.component.scss']
})
export class ItemConfigComponent implements OnInit {
  formItems: any = ItemConfigfields
  url: string = "item-configs/"
  instance: any
  formGroupOrder = [
    ['name'],
    ['type', 'has_serial'],
    ['description'],
  ]
  constructor(private route: ActivatedRoute, ) {

    this.route.queryParams.subscribe(params => {
      if (params.hasOwnProperty("id")) {
        this.instance = params
        console.log(this.instance)
      }
    });
  }

  ngOnInit(): void {

  }
  onValidatedData(data: any) {
  }
  onPostedData(data: any) {
    console.log(data)
  }


}
