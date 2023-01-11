import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/interfaces/Animal';
import { ListService } from 'src/app/services/list.service';

@Component({
	selector: 'app-list-render',
	templateUrl: './list-render.component.html',
	styleUrls: ['./list-render.component.scss'],
})
export class ListRenderComponent implements OnInit {
	public animals: Animal[] = [
		{ name: 'Turca', type: 'Dog', age: 10 },
		{ name: 'Tom', type: 'Cat', age: 5 },
		{ name: 'Frida', type: 'Dog', age: 3 },
		{ name: 'Bob', type: 'Horse', age: 8 },
	];

	animalDetails = '';

	constructor(private listService: ListService) {}

	ngOnInit(): void {}

	public showAge(animal: Animal) {
		this.animalDetails = `O pet ${animal.name} tem ${animal.age} anos.`;
	}

	public removeAnimal(animal: Animal): void {
		this.animals = this.listService.remove(this.animals, animal);
	}
}
