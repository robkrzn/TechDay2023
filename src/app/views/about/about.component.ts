import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  isLogin: boolean = true;
  constructor(private router: Router) {}

  ngOnInit(): void {
  }

  redirectToMSTest() {
    window.location.href = 'https://angularhostingtest-9322c.firebaseapp.com/';
  }

}
