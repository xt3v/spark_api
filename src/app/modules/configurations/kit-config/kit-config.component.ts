import { Component, OnInit } from '@angular/core';
import { KitConfigFields } from './options';

@Component({
  selector: 'app-kit-config',
  templateUrl: './kit-config.component.html',
  styleUrls: ['./kit-config.component.scss']
})
export class KitConfigComponent implements OnInit {

  formItems: any = KitConfigFields
  url: string = "kit-configs/"
  instance: any;
  formGroupOrder = [
    ['name'],
    ['description'],
    ['boxes']
  ]
  constructor(

  ) {
    this.instance = history.state.data
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
