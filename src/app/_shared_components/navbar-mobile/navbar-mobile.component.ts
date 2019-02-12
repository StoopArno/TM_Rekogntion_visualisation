import {Component, OnInit, Inject} from '@angular/core';
import {AccountService} from '../../_services/account.service';
import {User} from '../../_interfaces/user';
import {AddCameraComponent} from '../../pagegroups/camera-settings/add-camera/add-camera.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {RouterLink, RouterLinkActive} from '@angular/router';

@Component({
    selector: 'app-navbar-mobile',
    templateUrl: './navbar-mobile.component.html',
    styles: []
})
export class NavbarMobileComponent implements OnInit {

    navbarMobileExpand = false;
    user: User;

    ip_address;
    locatie;
    router;

    constructor(private accountService: AccountService, public dialog: MatDialog, private routerLinkActive: RouterLinkActive) {
        this.router = routerLinkActive;
    }

    ngOnInit() {
        this.accountService.loggedUser.subscribe(data => {
            this.user = data;
        });
    }

    openDialog(): void {
        const dialogRef = this.dialog.open(AddCameraComponent, {
            width: '300px',
            data: {ip_address: this.ip_address, locatie: this.locatie}
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
        });
    }

}
