import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-emissor',
	templateUrl: './emissor.component.html',
	styleUrls: ['./emissor.component.scss'],
})
export class EmissorComponent implements OnInit {
	myNumber: number = 0;
	constructor() {}

	ngOnInit(): void {}

	public onChangeNumber(): void {
		console.log(Math.random());
		this.myNumber = Math.floor(Math.random() * 10);
	}
}
