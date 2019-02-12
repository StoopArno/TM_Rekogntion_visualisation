import {Component, OnInit} from '@angular/core';
import {ToolbarService} from '../../_services/toolbar.service';
import {BreakpointObserver} from '@angular/cdk/layout';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styles: []
})
export class NavbarComponent implements OnInit {

    expandSidenav = false;
    toolbarTitle;

    constructor(private toolbarService: ToolbarService, private breakpointObserver: BreakpointObserver) {
    }

    ngOnInit() {
        this.toolbarService.toolbarTitle.subscribe(data => {
            this.toolbarTitle = data;
        });
    }

}
