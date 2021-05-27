import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { tableHandleActionsMixin } from 'src/app/core/mixins/table-handle-actions-mixin';
import { ModalsService } from 'src/app/shared/modals/modals.service';
import { TablesComponent } from 'src/app/shared/tables/tables.component';
import { TablesService } from 'src/app/shared/tables/tables.service';


const TableHandleActionsMixin = tableHandleActionsMixin(TablesComponent);
@Component({
  selector: 'app-item-history',
  templateUrl: './history-item.component.html',
  styleUrls: ['./history-item.component.scss']
})
export class ItemHistoryComponent extends TableHandleActionsMixin implements OnInit{
  
  constructor(
    private _modalService:ModalsService,
    private _tableService:TablesService,
    private _route : ActivatedRoute
  ) { 
    super();
  }
  url = "history/items_history?item_id=";

  headers = [
    {
      name: 'Date',
      source: "created_at",
    },
    {
      name: 'Description',
      source: "description",
    },
    {
      name: 'Created By',
      source: "created_by.full_name",
    },
  ];

  tableFilters = ["id"]

  ngOnInit(): void {
    this.url = `${this.url}${this._route.snapshot.queryParamMap.get('id')}`
  }

  handleActions(action: any) {
  
  }

}
