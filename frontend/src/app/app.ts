import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
/* Components */
import { Home } from './home/home';

@Component({
    selector: 'app-root',
    imports: [
        RouterOutlet,
        RouterModule,
        Home
    ],
    templateUrl: './app.html',
    styleUrl: './app.css'
})
export class App {
    protected readonly title = signal('frontend');
    titleBis = 'Homes';
}
