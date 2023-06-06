import { Component, OnInit } from '@angular/core'

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
	// state
	title: string = 'Tech Day 2023'

	constructor() {}

	ngOnInit(): void {}
}
