import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
    private baseUrl = 'http://localhost:3000';

    constructor(private http: HttpClient) {}

    // Test de connexion avec le backend
    getHello(): Observable<string> {
        return this.http.get(`${this.baseUrl}`, { responseType: 'text' });
    }

    // Exemple de méthodes API
    getData(): Observable<any> {
        return this.http.get(`${this.baseUrl}/api/data`);
    }

    postData(data: any): Observable<any> {
        return this.http.post(`${this.baseUrl}/api/data`, data);
    }
}