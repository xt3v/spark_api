import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {

  @Input() title: string = '';
  @Input() lists: any;
  @Input() active: string = '';
  
  constructor() { }

  ngOnInit(): void {
    console.log('IN SIDE MENU', this.lists);
    this.lists.map((list:any) => {
      list.active = list.name === this.active;
    })
    
  }

}
