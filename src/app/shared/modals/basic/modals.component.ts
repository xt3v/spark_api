import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modals',
  templateUrl: './modals.component.html',
  styleUrls: ['../modals.component.scss']
})
export class ModalsComponent implements OnInit {

  @Input() modalId: string = '';
  @Input() title: string = 'Title';
  @Input() confirmBtnName: string = 'Confirm';

  @Output() confirmBtn: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  confirm() {
    console.log('CONFIRM BUTTON CLICKED', true);
    
    this.confirmBtn.emit(true);
  }

}
