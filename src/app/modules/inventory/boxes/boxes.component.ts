import { Component, OnInit } from '@angular/core';
import { BoxConfigFields } from './options';
import { ActivatedRoute } from '@angular/router';
import { ModalsService } from "src/app/shared/modals/modals.service";

@Component({
  selector: 'app-boxes',
  templateUrl: './boxes.component.html',
  styleUrls: ['./boxes.component.scss']
})
export class BoxesComponent implements OnInit {
  formItems: any = BoxConfigFields;
  url: string = "boxs/bulk/"
  instance: any;
  formGroupOrder = [
    ["box_config", "store", "purchase_order"],
    ["serial_numbers"]
  ]
  constructor(
    private _activatedRoute: ActivatedRoute,
    private _modalService: ModalsService
  ) {
    this._activatedRoute.queryParams.subscribe(params => {
      if (params.hasOwnProperty('id')) {
        this.instance = params;
        console.log(this.instance)
      }
    })
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
