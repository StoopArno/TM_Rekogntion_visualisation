import {Component, OnInit} from '@angular/core';
import {ToolbarService} from './_services/toolbar.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    toolbarTitle;

    constructor(private toolbarService: ToolbarService) {   }

    ngOnInit() {
        this.toolbarService.toolbarTitle.subscribe(data => {
            this.toolbarTitle = data;
        });
    }
}
