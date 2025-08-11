import { Component } from '@angular/core';
import { TestConnectionComponent } from './test-connection/test-connection.component';

@Component({
    selector: 'app-root',
    template: `
        <h1>{{ title }}</h1>
        <app-test-connection></app-test-connection>
    `,
    standalone: true,
    imports: [TestConnectionComponent]
})
export class App {
    title = 'Frontend Angular + NestJS';
}