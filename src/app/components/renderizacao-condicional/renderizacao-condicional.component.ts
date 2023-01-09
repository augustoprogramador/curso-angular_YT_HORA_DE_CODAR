import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-renderizacao-condicional',
	templateUrl: './renderizacao-condicional.component.html',
	styleUrls: ['./renderizacao-condicional.component.scss'],
})
export class RenderizacaoCondicionalComponent implements OnInit {
	canShow: boolean = true;
	name: string = 'Teste';
	constructor() {}

	ngOnInit(): void {}
}
