import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from '../housing.service';
import { HousingLocationInfo } from '../housinglocation';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
    selector: 'app-details',
    imports: [ ReactiveFormsModule ],
    templateUrl: './details.html',
    styleUrls: ['./details.css'],
})

export class Details {
    route: ActivatedRoute = inject(ActivatedRoute);
    housingService: HousingService = inject(HousingService);
    housingLocationId = -1;
    housingLocation: HousingLocationInfo | undefined;

    get isWifiAvailable(): boolean {
        return this.housingLocation?.wifi ?? false;
    }

    get isLaundryAvailable(): boolean {
        return this.housingLocation?.laundry ?? false;
    }

    applyForm = new FormGroup({
        firstName: new FormControl(''),
        lastName: new FormControl(''),
        email: new FormControl('')
    });

    submitApplication() {
        this.housingService.submitApplication(
            this.applyForm.value.firstName ?? '',
            this.applyForm.value.lastName ?? '',
            this.applyForm.value.email ?? ''
        );
    }

    constructor() {
        this.housingLocationId = Number(this.route.snapshot.params['id']);
        this.housingLocation = this.housingService.getHousingLocationById(this.housingLocationId);

        if(this.housingLocation) {
            console.error(`Housing location not found for ID : ${this.housingLocationId}`);
        }
    }
}
