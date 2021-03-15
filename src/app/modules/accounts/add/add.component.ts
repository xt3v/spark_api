import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalsService } from 'src/app/shared/modals/modals.service';
import { optionsField } from '../../accounts/options';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  formItems: any = optionsField
  url: string = 'users/'
  instance: any

  formGroupOrder = [
    ['username'],
    ['first_name'],
    ['last_name'],
    ['role'],
    ['phone'],
    ['email']
  ]

  extraParams = {
    type: 'WH'
  }

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _modalService: ModalsService
  ) {
    this._activatedRoute.queryParamMap.subscribe(params => {
      if (params.hasOwnProperty('id')) {
        this.instance = params
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
