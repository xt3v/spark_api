import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public hoveredSubElement: boolean = false;
  public hoveredSubsubElement: boolean = false;

  constructor(
    private _route:Router,
    private _authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  toggleMouseOverSubElement() {
    this.hoveredSubElement = !this.hoveredSubElement;

    //TODO :-> Define better way to handle hovering and focus of the sub sub items and closing of the nav sub items when mouse clicked outside element.
    this.hoveredSubsubElement = false;
  }
  toggleMouseOverSubsubElement() {
    this.hoveredSubsubElement = !this.hoveredSubsubElement;
  }

  signOut() {
    this._authService.signOut();
  }
}
