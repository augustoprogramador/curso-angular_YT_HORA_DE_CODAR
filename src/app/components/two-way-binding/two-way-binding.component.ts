import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-two-way-binding',
	templateUrl: './two-way-binding.component.html',
	styleUrls: ['./two-way-binding.component.scss'],
})
export class TwoWayBindingComponent implements OnInit {
	name: string = '';
	select: string = '';
	contador: number = 1;
	constructor() {}

	ngOnInit(): void {}

	public teste(): void {}
}
