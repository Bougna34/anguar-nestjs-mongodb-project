import { Injectable } from '@angular/core';
import { HousingLocation } from './housinglocation';

@Injectable({
    providedIn: 'root'
})
export class Housing {
    getAllHousingLocations(): housingLocationInfo[] {
        return this.housingLocationList;
    }

    getHousingLocationById(id: number): housingLocationInfo[] {
        return this.housingLocationList.find((housingLocation) => housingLocation.id === id);
    }
}

