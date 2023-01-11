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

	public remove(id: number) {
		return this.http.delete<Animal>(`${this.apiUrl}/animals/${id}`);
	}

	public getAll(): Observable<Animal[]> {
		return this.http.get<Animal[]>(`${this.apiUrl}/animals`);
	}

	public getItem(id: number): Observable<Animal> {
		return this.http.get<Animal>(`${this.apiUrl}/animals/${id}`);
	}
}
