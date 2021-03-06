import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router) {}

  info() {
    this.router.navigate(['/', 'autor']);
  }
  acceso() {
    this.router.navigate(['/', 'videoclub']);
  }

}
