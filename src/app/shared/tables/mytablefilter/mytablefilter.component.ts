import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IDropdownSettings } from 'ng-multiselect-dropdown';

@Component({
  selector: 'app-mytablefilter',
  templateUrl: './mytablefilter.component.html',
  styleUrls: ['./mytablefilter.component.scss']
})
export class MytablefilterComponent implements OnInit {
  @Input() filterOptions:any;
  dropdownList: Array<any> = [];
  selectedItems: Array<any> = [];
  dropdownSettings:IDropdownSettings = {};
  @Output()
  onFilterSelect: EventEmitter<Array<any>> = new EventEmitter()

  constructor() { 

  }

  ngOnInit(): void {
    this.filterOptions = this.filterOptions.filter((filter: string) => typeof filter === 'string');

    console.log('THE TABLE FILTER OPTIONS', this.filterOptions)
    this.filterOptions.map((filter:string,ind:number) => {
      let item:any = {}
      item.item_id = ind;
      item.item_text = `${filter.charAt(0).toUpperCase()}${filter.slice(1)}`;
      this.dropdownList.push(item)
    });

    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
  }

  onItemSelect(item: any) {
    //console.log(item);
  }
  onSelectAll(items: any) {
    //console.log(items);
  }

  getFilterSelections() {
    this.onFilterSelect.emit(this.selectedItems);
  }

}
