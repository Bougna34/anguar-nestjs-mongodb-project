import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
    selector: 'app-test-connection',
    template: `
        <div>
            <h2>Test de connexion Backend</h2>
            <button (click)="testConnection()">Tester la connexion</button>
            @if (message) {
                <p>{{ message }}</p>
            }
                @if (error) {
                    <p style="color: red;">Erreur: {{ error }}</p>
                }
        </div>
    `,
    standalone: true,
    imports: []
})
export class TestConnectionComponent implements OnInit {
    message: string = '';
    error: string = '';

    constructor(private apiService: ApiService) {}

    ngOnInit() {
        this.testConnection();
    }

    testConnection() {
        this.apiService.getHello().subscribe({
        next: (response) => {
            this.message = `Connexion réussie: ${response}`;
            this.error = '';
            console.log('Backend connecté:', response);
        },
        error: (err) => {
            this.error = `Impossible de se connecter au backend: ${err.message}`;
            this.message = '';
            console.error('Erreur backend:', err);
        }
        });
    }
}