import {Component, OnInit, Inject} from '@angular/core';
import {AccountService} from '../../_services/account.service';
import {User} from '../../_interfaces/user';
// import {AddCameraComponent} from '../../pagegroups/camera-settings/add-camera/add-camera.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {ActivatedRoute, Router, RouterLink, RouterLinkActive} from '@angular/router';
import {AddCameraComponent} from '../../pagegroups/camera-settings/add-camera/add-camera.component';

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

    isCameraSettings = false;

    constructor(private accountService: AccountService, public dialog: MatDialog, private router: Router) {
    }

    ngOnInit() {
        this.accountService.loggedUser.subscribe(data => {
            this.user = data;
        });

        this.router.events.subscribe((val) => {
            if (location.pathname === '/camera-settings') {
                this.isCameraSettings = true;
            } else {
                this.isCameraSettings = false;
            }
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
