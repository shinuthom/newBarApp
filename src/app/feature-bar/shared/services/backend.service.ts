import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { BeToFeMapperService } from './be-to-fe-mapper.service';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class BackendService {
    constructor(private _http: Http, private beToFeMapperService: BeToFeMapperService) {
    }

    fetchBarList(start) {
        let url = 'http://localhost/barApp/getBarList.php';
        return this.get(url, null).map(response => response.json().list.map(this.beToFeMapperService.mapBarList))
            .catch(err => this.hasError(err));
    }
    fetchBarDetails(barId) {
        let url = `http://localhost/barApp/getBarDetail.php?id=${barId}`;
        return this.get(url, null).map(response => this.beToFeMapperService.mapBarDetails(response.json()))
            .catch(err => this.hasError(err));
    }
    get(url, header) {
        return this._http.get(url, header);
    }
    hasError(err) {
        return Observable.create(x => {
            x.next({
                hasError: true,
                errorMessage: err.toString()
            });
        });
    }

}