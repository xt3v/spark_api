import { Component, OnInit } from '@angular/core';
import { BoxConfigFields } from './options';
import { TablesComponent } from 'src/app/shared/tables/tables.component';
import { ModalsService } from "src/app/shared/modals/modals.service";
import { TablesService } from 'src/app/shared/tables/tables.service';
import { tableHandleActionsMixin } from 'src/app/core/mixins/table-handle-actions-mixin';


const TableHandleActionsMixin = tableHandleActionsMixin(TablesComponent);

@Component({
  selector: 'app-boxes',
  templateUrl: './boxes.component.html',
  styleUrls: ['./boxes.component.scss']
})
export class BoxesComponent extends TableHandleActionsMixin implements OnInit {
  formItems: any = BoxConfigFields;
  url: string = "boxs/bulk/"
  instance: any
  formGroupOrder = [
    ["box_config", "store","purchase_order"],
    ["serial_numbers"]
  ]
  constructor() {
    super();
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
