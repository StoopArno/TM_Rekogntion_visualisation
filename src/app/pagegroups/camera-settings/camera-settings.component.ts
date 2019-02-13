import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ToolbarService} from '../../_services/toolbar.service';
import {Camera} from '../../_interfaces/camera';
import {MatDialog, MatTableDataSource} from '@angular/material';
import {CameraSettingsService} from '../../_services/camera-settings.service';
import {SelectionModel} from '@angular/cdk/collections';
import {forEach} from '@angular/router/src/utils/collection';
import {AccountService} from '../../_services/account.service';
import {AddCameraComponent} from './add-camera/add-camera.component';

// const data: Camera[] = [
//   {ID: 1, IP: '172.16.0.7', place: 'aula'},
//   {ID: 2, IP: '172.16.0.8', place: 'jan breydel zaal'},
// ];

@Component({
    selector: 'app-camera-settings',
    templateUrl: './camera-settings.component.html',
    styles: []
})
export class CameraSettingsComponent implements OnInit {

    displayedColumns: string[] = ['active', 'IP', 'place', 'delete'];
    data;
    dataSource;

    // select variables
    selection;
    selectedCameras;

    ip_address;
    locatie;

    constructor(private toolbarService: ToolbarService, private cameraSettingsService: CameraSettingsService, public cdref: ChangeDetectorRef, public dialog: MatDialog) {
    }

    ngOnInit() {
        this.toolbarService.setToolbarTitle('Camera settings');
        // this.cameraSettingsService.getAllCameras();

        this.cameraSettingsService.cameraList.subscribe(data => {
            if (data != null) {
                this.data = data;
                this.dataSource = new MatTableDataSource(this.data);
                this.selection = new SelectionModel<any>(true, this.selectedCameras);
                this.getSelectedCameras();
            }
        });

    }

    getSelectedCameras() {
        const selected = [];

        this.data.forEach(function (camera) {
            if (camera.actief === 'True') {
                selected.push(camera);
            }
        });

        this.selectedCameras = selected;
        this.selection = new SelectionModel<any>(true, this.selectedCameras);

    }

    applyFilter(filterValue: string) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }

    isAllSelected() {
        const numSelected = this.selection.selected.length;
        const numRows = this.dataSource.data.length;
        return numSelected === numRows;
    }

    masterToggle() {
        this.isAllSelected() ?
            this.selection.clear() :
            this.dataSource.data.forEach(row => this.selection.select(row));
    }

    toggleActive(camera) {
        if (camera.actief === 'True') {
            camera.actief = 'False';
        } else {
            camera.actief = 'True';
        }

        this.cameraSettingsService.updateCamera(camera);
    }

    updateCamera(camera, locatie) {
        camera.locatie = locatie;
        this.cameraSettingsService.updateCamera(camera);
    }

    deleteCamera(cameraId) {
        this.cameraSettingsService.deleteCamera(cameraId);
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
