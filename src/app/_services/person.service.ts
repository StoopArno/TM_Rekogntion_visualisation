import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {first} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class PersonService {

    private readonly URL = 'https://rekognition-registration.herokuapp.com/';

    constructor(private http: HttpClient) {
    }

    getPersonByName(firstName, lastName) {
        return this.http.get(this.URL + 'persons?firstName=' + firstName + '&lastName=' + lastName)
            .toPromise()
            .then(data => data)
            .catch(error => {
                console.log(error);
            });
    }

    getLocationFromPerson(id) {
        return this.http.get(this.URL + 'get-location?id=' + id)
            .toPromise()
            .then(data => data);
    }
}
