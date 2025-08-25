import { Component, inject } from '@angular/core';
import { HousingLocation } from '../housing-location/housing-location';
import { HousingLocationInfo } from '../housinglocation';
import { HousingService } from '../housing.service';

@Component({
    selector: 'app-home',
    imports: [
        HousingLocation
    ],
    templateUrl: './home.html',
    styleUrl: './home.css'
})


export class Home {
    readonly baseUrl = 'https://angular.dev/assets/images/tutorials/common';
    
    housingLocationList: HousingLocationInfo[] = [];
    housingService: HousingService = inject(HousingService);

    constructor() {
        this.housingLocationList = this.housingService.getAllHousingLocations();
    }
}
