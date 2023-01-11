import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/interfaces/Animal';
import { ListService } from 'src/app/services/list.service';

@Component({
	selector: 'app-list-render',
	templateUrl: './list-render.component.html',
	styleUrls: ['./list-render.component.scss'],
})
export class ListRenderComponent implements OnInit {
	public animals: Animal[] = [];

	animalDetails = '';

	constructor(private listService: ListService) {
		this.getAnimals();
	}

	ngOnInit(): void {}

	public showAge(animal: Animal) {
		this.animalDetails = `O pet ${animal.name} tem ${animal.age} anos.`;
	}

	public removeAnimal(animal: Animal): void {
		this.animals = this.listService.remove(this.animals, animal);
	}

	private getAnimals() {
		this.listService
			.getAll()
			.subscribe((animals) => (this.animals = animals));
	}
}
