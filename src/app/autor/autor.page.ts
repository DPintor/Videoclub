import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmailValidator } from '@angular/forms';

@Component({
  selector: 'app-autor',
  templateUrl: './autor.page.html',
  styleUrls: ['./autor.page.scss'],
})
export class AutorPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  curriculum() {
    this.router.navigate(['/', 'curriculum']);
  }
  mail() {
    const link = 'mailto:email@email.com';
    window.location.href = link;
  }
  twitter() {
    window.open('http://twitter.com');
  }
  phone() {
    const link = 'tel:666789045';
    window.location.href = link;
  }

}
