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
