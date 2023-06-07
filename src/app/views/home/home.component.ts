import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
	// state
	title: string = 'Tech Day 2023'

	constructor(private router: Router) {}

	redirectToMSTest() {
		window.location.href = 'https://angularhostingtest-9322c.firebaseapp.com/';
	  }

	ngOnInit(): void {}
}
