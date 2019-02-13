import {Component, OnInit} from '@angular/core';
import {ToolbarService} from '../../_services/toolbar.service';
import {PersonService} from '../../_services/person.service';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styles: []
})
export class SearchComponent implements OnInit {

    persons;
    personOpened;

    constructor(private toolbarService: ToolbarService, private personService: PersonService) {
    }

    ngOnInit() {
        this.toolbarService.setToolbarTitle('Search');
    }

    searchPerson(firstName, lastName) {
        this.personService.getPersonByName(firstName, lastName)
            .then(data => {
                this.persons = data;
            });
    }

    openPerson(id) {
        this.personOpened = null;
        this.personService.getLocationFromPerson(id)
            .then(data => {
                this.personOpened = data;
            });
    }
}
