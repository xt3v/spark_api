import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(
    private _route: Router,
    private _authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  signOut() {
    this._authService.signOut();
  }
}
