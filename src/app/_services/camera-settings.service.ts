import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Camera} from '../_interfaces/camera';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {User} from '../_interfaces/user';
import {AddCameraComponent} from '../pagegroups/camera-settings/add-camera/add-camera.component';

@Injectable({
    providedIn: 'root'
})
export class CameraSettingsService {

    private readonly URL = 'https://rekognition-registration.herokuapp.com/cameras';
    cameraList: BehaviorSubject<any> = new BehaviorSubject(null);

    constructor(private http: HttpClient) {
        this.getAllCameras();
    }

    getAllCameras() {
        return this.http.get(this.URL)
            .toPromise()
            .then(data => {
                this.cameraList.next(data);
            });
    }

    insertCamera(camera) {
        return this.http.post(this.URL, {
            ip_address: camera.ip_address,
            locatie: camera.locatie,
        })
            .toPromise()
            .then(data => {
                this.getAllCameras();
                return data;
            })
            .catch(error => {
                if (error.status === 200) {
                    this.getAllCameras();
                } else {
                    console.error(error.error);
                }
            });
    }

    updateCamera(camera) {
        return this.http.put(this.URL + '/' + camera.id, {
            actief: camera.actief,
            ip_address: camera.ip_address,
            locatie: camera.locatie,
        })
            .toPromise()
            .then(data => {
                return data;
            })
            .catch(error => {
                if (error.status !== 200) {
                    console.error(error.error);
                }
            });
    }

    deleteCamera(cameraId: number) {
        return this.http.delete(this.URL + '/' + cameraId)
            .toPromise()
            .then(data => {
                this.getAllCameras();
                return data;
            })
            .catch(error => {
                if (error.status === 200) {
                    this.getAllCameras();
                } else {
                    console.error(error.error);
                }
            });
    }
}
