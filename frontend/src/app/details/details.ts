import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from '../housing.service';
import { HousingLocationInfo } from '../housingLocation';

@Component({
    selector: 'app-details',
    imports: [],
    templateUrl: './details.html',
    styleUrl: './details.css'
});

export class Details {
    route: ActivatedRoute = inject(ActivatedRoute);
    housingLocationId = -1;

    constructor() {
        this.housingLocationId = Number(this.route.snapshot.params['id']);
    }
}
