import { Injectable } from '@angular/core';
import { Animal } from '../interfaces/Animal';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class ListService {
	private apiUrl = 'http://localhost:3000';

	constructor(private http: HttpClient) {}

	public remove(animals: Animal[], animal: Animal): Animal[] {
		return animals.filter((a) => animal.name !== a.name);
	}

	public getAll(): Observable<Animal[]> {
		return this.http.get<Animal[]>(`${this.apiUrl}/animals`);
	}
}
