import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BoxConfigfields } from './options';

@Component({
  selector: 'app-box-config',
  templateUrl: './box-config.component.html',
  styleUrls: ['./box-config.component.scss']
})
export class BoxConfigComponent implements OnInit {
  formItems: any = BoxConfigfields
  url: string = "box-configs/"
  instance: any;
  formGroupOrder = [
    ['name'],
    ['description'],
    ['items']
  ]
  constructor(
    private _activatedRoute:ActivatedRoute
  ) { 
    this._activatedRoute.queryParams.subscribe(params => {
      if (params.hasOwnProperty("id")) {
        this.instance = params
        console.log(this.instance)
      }
    });
  }

  ngOnInit(): void {
  }
  onValidatedData(data: any) {
    console.log(data)
  }
  onPostedData(data: any) {
    console.log(data)
  }

}
