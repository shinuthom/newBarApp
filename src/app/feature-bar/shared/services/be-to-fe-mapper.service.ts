import { Injectable } from '@angular/core';
import { BarList } from '../models/bar-list.model';

@Injectable()
export class BeToFeMapperService {
    mapBarList(barRes) {
        const bar = new BarList();
        bar.barId = barRes.id;
        bar.barName = barRes.barName;
        bar.barPrimaryImage = barRes.barPrimaryImage;
        bar.barAddressLine1 = barRes.addressLine1;
        bar.barDetails = barRes.barDetails;

        return bar;
    }
    mapBarDetails(barRes) {
        const bar = new BarList();
        bar.barId = barRes.id;
        bar.barName = barRes.barName;
        bar.barPrimaryImage = barRes.barPrimaryImage;
        bar.barAddressLine1 = barRes.addressLine1;
        bar.barDetails = barRes.barDetails;

        return bar;
    }
}