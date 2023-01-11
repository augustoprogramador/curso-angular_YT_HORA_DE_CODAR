import { Injectable } from '@angular/core';
import { Animal } from '../interfaces/Animal';

@Injectable({
	providedIn: 'root',
})
export class ListService {
	constructor() {}

	public remove(animals: Animal[], animal: Animal): Animal[] {
		return animals.filter((a) => animal.name !== a.name);
	}
}
