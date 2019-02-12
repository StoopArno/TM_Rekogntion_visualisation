import {Component, Inject, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {Camera} from '../../../_interfaces/camera';
import {CameraSettingsService} from '../../../_services/camera-settings.service';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
    selector: 'app-add-camera',
    templateUrl: './add-camera.component.html',
    styles: []
})
export class AddCameraComponent {

    camera: Camera;

    addCameraForm: FormGroup;

    constructor(
        public dialogRef: MatDialogRef<AddCameraComponent>,
        @Inject(MAT_DIALOG_DATA) public data: Camera,
        private cameraSettingsService: CameraSettingsService) {

        this.addCameraForm = new FormGroup({
            ip_address: new FormControl(''),
            locatie: new FormControl('')
        });
    }

    onNoClick(): void {
        this.dialogRef.close();
    }

    insertCamera() {
        this.dialogRef.close();
        this.camera = this.addCameraForm.value;
        this.cameraSettingsService.insertCamera(this.camera);
    }
}
