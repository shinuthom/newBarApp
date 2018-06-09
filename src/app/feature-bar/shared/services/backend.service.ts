import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { BeToFeMapperService } from './be-to-fe-mapper.service';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class BackendService {
    apiURL = 'http://localhost/barApp/services/';
    constructor(private _http: Http, private beToFeMapperService: BeToFeMapperService) {
    }

    fetchBarList(start) {
        let url = `${this.apiURL}getBarList.php?start=${start}`;
        return this.get(url, null).map(response => response.json().list.map(this.beToFeMapperService.mapBarList))
            .catch(err => this.hasError(err));
    }
    fetchBarDetails(barId) {
        let url = `${this.apiURL}getBarDetail.php?id=${barId}`;
        return this.get(url, null).map(response => this.beToFeMapperService.mapBarDetails(response.json()))
            .catch(err => this.hasError(err));
    }
    userLogin(data) {
        var params = `?userID=${data.email}&password=${data.password}`;
        let url = `${this.apiURL}userLogin.php${params}`;
        var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return this.get(url, null).map(response => this.beToFeMapperService.mapUserDetails(response.json()))
            .catch(err => this.hasError(err));
    }
    get(url, header) {
        return this._http.get(url, header);
    }
    post(url, body, header) {
        return this._http.post(url, body,{headers: header});
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